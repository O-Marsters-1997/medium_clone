import { PostsQueryResult, CategoriesQueryResult } from "~/sanity/types";

export type ValueOf<T> = T[keyof T];

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type SearchParams = Record<string, string> | null | undefined;

// Type aliases query results --> actual types
export type Post = ArrayElement<PostsQueryResult>;
export type Posts = PostsQueryResult;

export type Category = ArrayElement<CategoriesQueryResult>;
export type Categories = CategoriesQueryResult;
