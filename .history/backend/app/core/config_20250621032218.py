import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    GOOGLE_CLIENT_ID: str = os.getenv("GOOGLE_CLIENT_ID")
    GOOGLE_CLIENT_SECRET: str = os.getenv("GOOGLE_CLIENT_SECRET")
    SESSION_SECRET: str = os.getenv("SESSION_SECRET")
    JWT_SECRET: str = os.getenv("JWT_SECRET")
    FRONTEND_URL: str = os.getenv("FRONTEND_URL")
    REDIRECT_PATH: str = os.getenv("REDIRECT_PATH", "/auth/callback")
    @property
    def REDIRECT_URI(self) -> str:
        return f"http://localhost:8000{self.REDIRECT_PATH}"