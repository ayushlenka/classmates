import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email?.endsWith('@ucdavis.edu')) {
        return false; // Reject login if not UC Davis email
      }
      return true;
    },
  },
  pages: {
    signIn: '/signin', // Redirect users here when signing in
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
