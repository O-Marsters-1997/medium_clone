import { auth } from "~/auth";
import { logger } from "~/utils/logger";

export const getUser = async () => {
  try {
    const session = await auth();

    return session?.user ?? null;
  } catch (err) {
    logger.error(err);
  }
};
