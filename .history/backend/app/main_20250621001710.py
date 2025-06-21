from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware
from app.api.auth import router as auth_router
from app.auth.session import router as session_router
from dotenv import load_dotenv
from pathlib import Path
import os
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


env_path = Path(__file__).resolve().parents[1] / ".env"
load_dotenv(dotenv_path=env_path)

app = FastAPI()

session_secret = os.getenv("SESSION_SECRET")
if not session_secret:
    raise ValueError("SESSION_SECRET is not set in the .env file")
app.add_middleware(SessionMiddleware, secret_key=session_secret)

app.include_router(auth_router)
app.include_router(session_router)
