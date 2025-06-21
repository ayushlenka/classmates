from fastapi import APIRouter, Request, HTTPException

router = APIRouter()

@router.get("/me")
async def get_user(request: Request):
    user = request.session.get("user")
    if not user:
        raise HTTPException(status_code=401, detail="Not logged in")
    return user
