import "next-auth/jwt";
import NextAuth from "next-auth";
import type { DefaultSession } from "@auth/core/types";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { Config } from "./config";
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

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as any,
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  secret: Config.AUTH_SECRET,
  providers: [
    Google({
      clientId: Config.GOOGLE_PROVIDER.CLIENT_ID,
      clientSecret: Config.GOOGLE_PROVIDER.CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const validate = validateLogin(credentials);
        const user = await loginAccount(validate);
        if (!user) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user?.id) {
        token.id = user.id;
        token.role = user.role;
        token.picture = user.image;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user && token?.id) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.image = token.picture;
      }
      return session;
    },
  },
});
