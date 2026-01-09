from pydantic import BaseModel


class UserOut(BaseModel):
    sub: str
    name: str | None = None
    email: str
    picture: str | None = None
