// import NextAuth, { NextAuthOptions } from 'next-auth';
// import { Session, User } from 'next-auth';
// import { JWT } from 'next-auth/jwt';
// import GoogleProvider from 'next-auth/providers/google';

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user }: { user: User }) {
//       if (!user.email || !user.email.endsWith('@ucdavis.edu')) {
//         return false; // Reject non-UC Davis emails
//       }
//       return true;
//     },
//     async session({ session, token }: { session: Session; token: JWT }) {
//       if (session.user) {
//         session.user.email = token.email as string;
//         session.user.name = token.name as string;
//       }
//       return session;
//     },
//     async jwt({ token, user }: { token: JWT; user?: User }) {
//       if (user) {
//         token.email = user.email;
//         token.name = user.name;
//       }
//       return token;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// export default NextAuth(authOptions);

import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email || !user.email.endsWith('@ucdavis.edu')) {
        return false; // ✅ Restrict to UC Davis emails
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
