import { client } from "~/sanity/lib/client";

export const fetchSanityContent = async <T = unknown>(query: string) => {
  return await client.fetch<T>(query);
};
