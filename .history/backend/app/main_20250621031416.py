# main.py
import os
from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware
from fastapi.middleware.cors import CORSMiddleware

from session import router as session_router
from auth import router as auth_router

app = FastAPI()

# 1) Session middleware (stores session in a signed cookie)
app.add_middleware(
    SessionMiddleware,
    secret_key=os.getenv("SESSION_SECRET"),        # pick a long random string
    session_cookie="session",                     # cookie name
    max_age=14 * 24 * 3600,                       # two weeks
)

# 2) CORS so that your React (localhost:3000) can call with credentials
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3) Mount routers
app.include_router(session_router)  # /auth/login, /auth/callback, etc.
app.include_router(auth_router)     # /me

# If you’d like a logout endpoint:
@session_router.get("/auth/logout")
async def logout(request):
    request.session.clear()
    return {"detail": "Logged out"}
