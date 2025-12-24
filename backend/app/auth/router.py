from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import RedirectResponse

from app.auth.oauth_client import oauth
from app.core.config import Settings

settings = Settings()
router = APIRouter(prefix="/auth", tags=["auth"])

# Google login
@router.get("/login")
async def login(request: Request):
    redirect_uri = request.url_for("auth_callback")
    return await oauth.google.authorize_redirect(request, redirect_uri)

# Google login redirect
@router.get("/callback", name="auth_callback")
async def auth_callback(request: Request):
    try:
        token = await oauth.google.authorize_access_token(request)
    except Exception as e:
        raise HTTPException(400, f"Authorization failed: {e}")

    try:
        user_info = await oauth.google.userinfo(token=token)
    except Exception as e:
        raise HTTPException(400, f"Failed to fetch user info: {e}")

    request.session["user"] = dict(user_info)
    return RedirectResponse(url=settings.FRONTEND_URL + "/input") 

# Google logout
@router.get("/logout")
async def logout(request: Request):
    request.session.clear()
    return {"detail": "Logged out"}

# Checks if user is logged in
@router.get("/me")
async def me(request: Request):
    user = request.session.get("user")
    if not user:
        raise HTTPException(401, "Not logged in")
    return user;