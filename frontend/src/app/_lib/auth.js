import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { BACK_API } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),

    Credentials({
      name: "Company Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const response = await fetch(BACK_API + "/api/auth/company", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        if (!response.ok) return null;

        const user = await response.json();

        return {
          id: user.id,
          email: user.email,
          userType: "company",
        };
      },
    }),
  ],

  callbacks: {
    async authorized({ auth, request }) {
      return !!auth?.user;
    },
    async jwt({ token, account, user }) {
      if (account?.provider === "google") {
        token.userType = "user"; // user type for Google users
      } else if (user) {
        token.userType = user.userType;
      }
      return token;
    },
    async redirect({ url, baseUrl, token }) {
      if (token?.userType === "company") {
        return `${baseUrl}/company/`;
      }
      return `${baseUrl}/`;
    },
  },

  pages: {
    signIn: "/login",
    signUp: "/signup",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
