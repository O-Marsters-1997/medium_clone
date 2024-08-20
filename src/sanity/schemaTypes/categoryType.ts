import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { mustContainNanoId, slugifyWithNanoId } from "../utils";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => slugifyWithNanoId(input),
      },
      validation: (rule) => mustContainNanoId(rule),
    }),
  ],
});
