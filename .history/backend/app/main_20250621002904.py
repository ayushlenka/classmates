from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware
from fastapi.middleware.cors import CORSMiddleware
from app.api.auth import router as auth_router
from app.auth.session import router as session_router
from dotenv import load_dotenv
from pathlib import Path
import os

# Load .env
env_path = Path(__file__).resolve().parents[1] / ".env"
load_dotenv(dotenv_path=env_path)

session_secret = os.getenv("SESSION_SECRET")
if not session_secret:
    raise ValueError("SESSION_SECRET is not set in the .env file")

app = FastAPI()

# ✅ Add CORS middleware if using a frontend (like React or Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or "*" for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Add session middleware BEFORE router mounts
app.add_middleware(SessionMiddleware, secret_key=session_secret)

# ✅ Mount routers
app.include_router(auth_router)
app.include_router(session_router)
