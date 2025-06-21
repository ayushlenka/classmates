from fastapi import APIRouter, Request, HTTPException
from starlette.responses import RedirectResponse
from authlib.integrations.starlette_client import OAuth
from dotenv import load_dotenv
import os
import logging

load_dotenv(dotenv_path="../.env")

router = APIRouter()
logger = logging.getLogger(__name__)

oauth = OAuth()
oauth.register(
    name="google",
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
)

@router.get("/auth/login")
async def login(request: Request):
    redirect_uri = request.url_for("auth_callback")
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get("/auth/callback")
async def auth_callback(request: Request):
    logger.info(f"Session BEFORE callback: {request.session}")

    try:
        token = await oauth.google.authorize_access_token(request)
        logger.info(f"Token received: {token}")
    except Exception as e:
        logger.error(f"OAuth callback error: {e}")
        raise HTTPException(status_code=400, detail="Authorization failed")

    id_token = token.get("id_token")
    if not id_token:
        raise HTTPException(status_code=400, detail="ID token missing from OAuth response")

    try:
        # ✅ FIXED: use request.scope, not request
        user = await oauth.google.parse_id_token(request.scope, id_token)
        logger.info(f"Authenticated user: {user}")
    except Exception as e:
        logger.error(f"Failed to parse id_token: {e}")
        raise HTTPException(status_code=500, detail="Failed to parse user info")

    request.session["user"] = dict(user)
    return RedirectResponse(url="http://localhost:3000/input")

