from datetime import datetime, timedelta, timezone
import secrets
from typing import Optional

import jwt
from jwt import InvalidTokenError
from authlib.integrations.starlette_client import OAuth
from fastapi import HTTPException, Request, status

from app.core.config import Settings

settings = Settings()

oauth = OAuth()
oauth.register(
    name="google",
    client_id=settings.GOOGLE_CLIENT_ID,
    client_secret=settings.GOOGLE_CLIENT_SECRET,
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
)


def _require_jwt_secret() -> None:
    if not settings.JWT_SECRET:
        raise RuntimeError("JWT_SECRET is not set")


def create_access_token(claims: dict) -> str:
    _require_jwt_secret()
    now = datetime.now(timezone.utc)
    payload = {
        "iss": settings.JWT_ISSUER,
        "aud": settings.JWT_AUDIENCE,
        "iat": int(now.timestamp()),
        "nbf": int(now.timestamp()),
        "exp": int((now + timedelta(minutes=settings.JWT_ACCESS_MINUTES)).timestamp()),
        "sub": claims.get("sub") or claims.get("email"),
        "email": claims.get("email"),
        "name": claims.get("name"),
        "picture": claims.get("picture"),
        "jti": secrets.token_urlsafe(16),
    }
    return jwt.encode(payload, settings.JWT_SECRET, algorithm="HS256")


def verify_access_token(token: str) -> dict:
    _require_jwt_secret()
    return jwt.decode(
        token,
        settings.JWT_SECRET,
        algorithms=["HS256"],
        audience=settings.JWT_AUDIENCE,
        issuer=settings.JWT_ISSUER,
        leeway=settings.JWT_LEEWAY_SECONDS,
        options={"require": ["exp", "iat", "nbf", "sub", "iss", "aud"]},
    )


def _extract_bearer_token(request: Request) -> Optional[str]:
    auth_header = request.headers.get("Authorization")
    if auth_header and auth_header.lower().startswith("bearer "):
        return auth_header.split(" ", 1)[1].strip()
    return request.cookies.get(settings.AUTH_COOKIE_NAME)


def get_current_user(request: Request) -> dict:
    token = _extract_bearer_token(request)
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    try:
        return verify_access_token(token)
    except InvalidTokenError as exc:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token") from exc
