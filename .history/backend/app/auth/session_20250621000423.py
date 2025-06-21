from fastapi import APIRouter, Request, HTTPException
from starlette.responses import RedirectResponse
from authlib.integrations.starlette_client import OAuth
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="../.env")

router = APIRouter()

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

    if token is None:
        raise HTTPException(status_code=400, detail="No token received from Google")

    try:
        if 'id_token' in token:
            user = await oauth.google.parse_id_token(request, token)
        else:
            # Fallback if id_token is missing
            resp = await oauth.google.get('userinfo', token=token)
            user = resp.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"OAuth error: {str(e)}")

    request.session['user'] = dict(user)
    return RedirectResponse(url="http://localhost:3000/input")
