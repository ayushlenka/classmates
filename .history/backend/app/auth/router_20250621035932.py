from fastapi import APIRouter, Request, HTTPException
from starlette.responses import RedirectResponse

from app.auth.oauth_client import oauth
# from authlib.jose import jwt as jose_jwt  # no longer needed
from app.core.config import Settings

settings = Settings()
router = APIRouter(prefix="/auth", tags=["auth"])

@router.get("/login")
async def login(request: Request):
    redirect_uri = request.url_for("auth_callback")
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get("/callback", name="auth_callback")
async def auth_callback(request: Request):
    try:
        token = await oauth.google.authorize_access_token(request)
    except Exception as e:
        raise HTTPException(400, f"Authorization failed: {e}")

    # Parse and verify the ID token using Authlib's helper
    try:
        user_info = await oauth.google.parse_id_token(request, token)
    except Exception as e:
        raise HTTPException(400, f"Failed to parse ID token: {e}")

    # Store user info in session
    request.session["user"] = dict(user_info)
    return RedirectResponse(url=settings.FRONTEND_URL + "/input")

@router.get("/logout")
async def logout(request: Request):
    request.session.clear()
    return {"detail": "Logged out"}

@router.get("/me")
async def me(request: Request):
    user = request.session.get("user")
    if not user:
        raise HTTPException(401, "Not logged in")
    return user