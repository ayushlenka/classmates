from fastapi import APIRouter, Request, HTTPException
from starlette.responses import RedirectResponse
from authlib.jose import jwt as jose_jwt

from app.auth.oauth_client import oauth
from app.auth.jwt_handler import create_jwt_for_user, verify_jwt
from app.auth.schemas import UserOut        # ← ADD THIS LINE
from app.core.config import Settings

settings = Settings()
router = APIRouter(prefix="/auth", tags=["auth"])

@router.get("/login")
async def login(request: Request):
    redirect_uri = request.url_for("auth_callback")
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get("/callback", name="auth_callback")
async def auth_callback(request: Request):
    token = await oauth.google.authorize_access_token(request)
    id_token = token.get("id_token")
    if not id_token:
        raise HTTPException(400, "ID token missing from OAuth response")
    claims = jose_jwt.decode(id_token, key=None, options={"verify_signature": False})
    request.session["user"] = dict(claims)
    return RedirectResponse(url=settings.FRONTEND_URL + "/input")

@router.get("/logout")
async def logout(request: Request):
    request.session.clear()
    return {"detail": "Logged out"}

@router.get("/me", response_model=UserOut)
async def me(request: Request):
    user = request.session.get("user")
    if not user:
        raise HTTPException(401, "Not logged in")
    return user