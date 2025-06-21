from fastapi import APIRouter, Request, HTTPException
from starlette.responses import RedirectResponse
from authlib.integrations.starlette_client import OAuth
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

    if token is None:
        raise HTTPException(status_code=400, detail="No token received from Google")

    try:
        if 'id_token' in token:
            # ✅ FIXED: pass request.scope instead of request
            user = await oauth.google.parse_id_token(request.scope, token["id_token"])
            logger.info(f"User Info from id_token: {user}")
        else:
            # ✅ FIXED: full URL to avoid UnsupportedProtocol error
            resp = await oauth.google.get('https://openidconnect.googleapis.com/v1/userinfo', token=token)
            user = resp.json()
            logger.info(f"User Info from userinfo fallback: {user}")
    except Exception as e:
        logger.error(f"OAuth error: {e}")
        raise HTTPException(status_code=500, detail=f"OAuth error: {str(e)}")

    request.session['user'] = dict(user)
    return RedirectResponse(url="http://localhost:3000/input")


