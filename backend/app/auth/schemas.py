from pydantic import BaseModel


class UserOut(BaseModel):
    sub: str
    name: str
    email: str
    picture: str | None = None