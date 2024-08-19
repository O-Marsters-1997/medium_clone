import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "~/lib/prisma";
import { config } from "~/auth.config";
import { routes } from "~/utils/routes";

export type Provider = {
  id: "google" | "facebook";
  name: string;
};

export const providerMap = config.providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name } as Provider;
  } else {
    return { id: provider.id, name: provider.name } as Provider;
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...config,
  adapter: PrismaAdapter(prisma),
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
