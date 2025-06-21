import os
import jwt
from datetime import datetime, timedelta
from app.core.config import Settings

settings = Settings()

SECRET_KEY = settings.JWT_SECRET
ALGORITHM = "HS256"


def create_jwt_for_user(claims: dict) -> str:
    payload = {
        "sub": claims.get("email"),
        "name": claims.get("name"),
        "iat": datetime.utcnow(),
        "exp": datetime.utcnow() + timedelta(hours=1),
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def verify_jwt(token: str) -> dict:
    return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])