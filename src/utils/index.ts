import { auth } from "~/auth";

export const getUser = async () => {
  const session = await auth();
  return session?.user ?? null;
};

export const getParamsValue = (
  params: Record<string, string> | null | undefined,
  target: string,
) => {
  if (!params) {
    return params;
  }

  return params[target];
};
