"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn } from "~/auth";
import { logger } from "~/utils/logger";
import { routes } from "~/utils/routes";

export const handleSignIn = (providerId: string) => async () => {
  "use server";
  try {
    await signIn(providerId, { redirectTo: routes.home });
  } catch (error) {
    if (error instanceof AuthError) {
      logger.error(error.message);

      return redirect(`${routes.home}`);
    }
    throw error;
  }
};
