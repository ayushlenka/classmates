// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email: string;
      image?: string | null;
    };
  }

  interface User {
    id?: string;
    name?: string | null;
    email: string;
    image?: string | null;
  }
}
