import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "~/lib/prisma";
import { routes } from "~/utils/routes";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";

export type AuthProvider = {
  id: "google" | "facebook";
  name: string;
};

const PROVIDERS: Provider[] = [Google, Facebook];

export const providerMap = PROVIDERS.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name } as AuthProvider;
  } else {
    return { id: provider.id, name: provider.name } as AuthProvider;
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: PROVIDERS,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: routes.signin,
  },
  callbacks: {
    session: async ({ session, user }) => {
      return session;
    },

    redirect() {
      return routes.home;
    },
  },
});
