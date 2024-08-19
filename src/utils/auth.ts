import { auth } from "~/lib/auth";

const mustGetSession = async () => {
  const session = await auth();

  if (!session) {
    throw new Error("No session found");
  }

  return session;
};

export const getUser = async () => {
  const session = await mustGetSession();
  const { role, ...rest } = session.user;

  return { role, ...rest };
};
