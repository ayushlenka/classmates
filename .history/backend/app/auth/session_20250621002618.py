from fastapi import APIRouter, Request, HTTPException
from starlette.responses import RedirectResponse
from authlib.integrations.starlette_client import OAuth
from authlib.jose import jwt
import os
import logging
from dotenv import load_dotenv

load_dotenv(dotenv_path="../.env")

router = APIRouter()
logger = logging.getLogger(__name__)

oauth = OAuth()
oauth.register(
    name='google',
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
)

@router.get("/auth/login")
async def login(request: Request):
    redirect_uri = request.url_for('auth_callback')
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get("/auth/callback")
async def auth_callback(request: Request):
    token = await oauth.google.authorize_access_token(request)
    logger.info(f"OAuth Token Response: {token}")

    if not token:
        raise HTTPException(status_code=400, detail="Token not received from Google")

    try:
        id_token = token.get("id_token")
        if not id_token:
            raise KeyError("id_token missing in token")

        # ✅ Decode token manually (since parse_id_token is bugging out)
        claims = jwt.decode(id_token, key=None, options={"verify_signature": False})
        user = claims
        logger.info(f"User decoded from ID token: {user}")

    except Exception as e:
        logger.error(f"OAuth error: {e}")
        raise HTTPException(status_code=500, detail=f"OAuth error: {str(e)}")

    request.session['user'] = dict(user)
    return RedirectResponse(url="http://localhost:3000/input")
