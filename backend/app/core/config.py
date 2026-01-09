import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    GOOGLE_CLIENT_ID: str = os.getenv("GOOGLE_CLIENT_ID")
    GOOGLE_CLIENT_SECRET: str = os.getenv("GOOGLE_CLIENT_SECRET")
    SESSION_SECRET: str = os.getenv("SESSION_SECRET")
    JWT_SECRET: str = os.getenv("JWT_SECRET")
    JWT_ISSUER: str = os.getenv("JWT_ISSUER", "classmates")
    JWT_AUDIENCE: str = os.getenv("JWT_AUDIENCE", "classmates")
    JWT_ACCESS_MINUTES: int = int(os.getenv("JWT_ACCESS_MINUTES", "60"))
    JWT_LEEWAY_SECONDS: int = int(os.getenv("JWT_LEEWAY_SECONDS", "0"))
    AUTH_COOKIE_NAME: str = os.getenv("AUTH_COOKIE_NAME", "classmates_access")
    AUTH_COOKIE_DOMAIN: str | None = os.getenv("AUTH_COOKIE_DOMAIN")
    COOKIE_SAMESITE: str = os.getenv("COOKIE_SAMESITE", "lax")
    FRONTEND_URL: str = os.getenv("FRONTEND_URL")
    REDIRECT_PATH: str = os.getenv("REDIRECT_PATH", "/auth/callback")
    @property
    def REDIRECT_URI(self) -> str:
        return f"http://localhost:8000{self.REDIRECT_PATH}"

    @property
    def COOKIE_SECURE(self) -> bool:
        value = os.getenv("COOKIE_SECURE")
        if value is None:
            return bool(self.FRONTEND_URL and self.FRONTEND_URL.startswith("https://"))
        return value.lower() in {"1", "true", "yes", "on"}
