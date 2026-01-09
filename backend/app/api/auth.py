from fastapi import APIRouter, Depends, HTTPException, Request, Response
from fastapi.responses import RedirectResponse

from app.core.config import Settings
from app.schemas.auth import UserOut
from app.service.auth import create_access_token, get_current_user, oauth

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
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"Authorization failed: {exc}")

    try:
        user_info = await oauth.google.userinfo(token=token)
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"Failed to fetch user info: {exc}")

    email = user_info.get("email")
    if not email:
        raise HTTPException(status_code=400, detail="Email is required")
    if user_info.get("email_verified") is False:
        raise HTTPException(status_code=403, detail="Email not verified")

    claims = {
        "sub": user_info.get("sub") or email,
        "email": email,
        "name": user_info.get("name"),
        "picture": user_info.get("picture"),
    }
    access_token = create_access_token(claims)

    response = RedirectResponse(url=settings.FRONTEND_URL + "/input")
    response.set_cookie(
        key=settings.AUTH_COOKIE_NAME,
        value=access_token,
        httponly=True,
        secure=settings.COOKIE_SECURE,
        samesite=settings.COOKIE_SAMESITE,
        max_age=settings.JWT_ACCESS_MINUTES * 60,
        domain=settings.AUTH_COOKIE_DOMAIN,
        path="/",
    )
    return response


@router.get("/logout")
async def logout(response: Response):
    response.delete_cookie(
        key=settings.AUTH_COOKIE_NAME,
        domain=settings.AUTH_COOKIE_DOMAIN,
        path="/",
    )
    return {"detail": "Logged out"}


@router.get("/me", response_model=UserOut)
async def me(user: dict = Depends(get_current_user)):
    return user
