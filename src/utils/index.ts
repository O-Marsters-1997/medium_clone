import { auth } from "~/lib/auth";
import { SearchParams } from "~/types";

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

export const mustGet = <T, U extends T>(
  value: T,
  typeGuard: (value: T) => value is U,
): T => {
  if (typeGuard(value)) {
    return value;
  }
  throw new Error("Value does not match the expected type");
};

export const getUrlSearchParam = (params: SearchParams, target: string) => {
  if (!params) return null;

  const searchParams = new URLSearchParams(params);

  return searchParams.get(target);
};
