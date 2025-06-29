import "next-auth/jwt";
import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { prisma } from "@/lib/prisma";
import { loginAccount } from "@/services/login.services";
import { validateLogin } from "@/validators/login.validator";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
  interface User {
    role: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    idToken?: string;
  }
}

export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const validate = validateLogin(credentials);
        const user = await loginAccount(validate);
        return user ?? null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user?.id) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user && token?.id) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
});
