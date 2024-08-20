import { client } from "../lib/client";
import { nanoid } from "nanoid";
import { SlugRule } from "sanity";

export const fetchSanityContent = async <T = unknown>(query: string) => {
  return await client.fetch<T>(query);
};

export const slugifyWithNanoId = async (input: string) => {
  const id = nanoid();

  return `${input}-${id}`;
};

export const mustContainNanoId = (rule: SlugRule) => {
  return [
    rule.custom((slug) => {
      if (!slug?.current) {
        return "slug is required";
      }

      const nanoidPattern = /-([a-zA-Z0-9_-]{21})$/;
      if (!nanoidPattern.test(slug.current)) {
        return "slug must end with a dash followed by a 21-character nanoid";
      }

      return true;
    }),
  ];
};
