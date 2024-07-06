import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "~/lib/prisma";
import authConfig from "~/auth.config";
import { routes } from "~/utils/routes";

export type Provider = {
  id: string;
  name: string;
};

export const providerMap = authConfig.providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
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
    signIn: routes.login,
  },
  callbacks: {
    async jwt({ token, user }) {
      return token;
    },

    async session({ session, token }) {
      if (token) {
      }

      return session;
    },

    redirect() {
      return routes.home;
    },
  },
});
