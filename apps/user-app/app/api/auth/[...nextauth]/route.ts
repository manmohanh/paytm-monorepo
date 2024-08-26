import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        return {
          id: "1",
          email: credentials.email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});

export const GET = handler;
export const POST = handler;
