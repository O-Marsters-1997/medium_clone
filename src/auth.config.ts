import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

import type { Provider } from "next-auth/providers";
import { NextAuthConfig } from "next-auth";

const providers: Provider[] = [Google, Facebook];

export const config = {
  providers,
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,
  },
};
