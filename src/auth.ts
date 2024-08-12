import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "~/lib/prisma";
import authConfig from "~/auth.config";
import { routes } from "~/utils/routes";

export type Provider = {
  id: "google" | "facebook";
  name: string;
};

export const providerMap = authConfig.providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name } as Provider;
  } else {
    return { id: provider.id, name: provider.name } as Provider;
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
  pages: {
    signIn: routes.signin,
  },
  callbacks: {
    jwt: async ({ token }) => {
      return token;
    },

    session: async ({ session, token }) => {
      if (token) {
      }

      return session;
    },

    redirect() {
      return routes.home;
    },
  },
});
