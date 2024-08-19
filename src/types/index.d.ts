import { PostsQueryResult } from "~/sanity/types";

export type ValueOf<T> = T[keyof T];

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type SearchParams = Record<string, string> | null | undefined;

// Type aliases query results --> actual types
export type PostsQueryResultItem = ArrayElement<PostsQueryResult>;

export type Post = PostsQueryResultItem & {
  title: string;
};
