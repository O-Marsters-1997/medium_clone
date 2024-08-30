import { groq } from "next-sanity";
import { CategoriesQueryResult, PostsQueryResult } from "~/sanity/types";
import { snakeCase } from "lodash";
import { fetchSanityContent } from "~/sanity/utils";
import { Categories, Post } from "~/types";

export const fetchPosts = async (categoryName: string | null) => {
  const PostsQuery = groq`
   *[_type == 'post' 
   ${categoryName !== null ? `&& "${categoryName}" in categories[]->title` : ``}]{
      _id, title, body, publishedAt, author->{name}
  }`;

  return await fetchSanityContent<PostsQueryResult>(PostsQuery);
};

export const fetchCategories = async (): Promise<Categories> => {
  const CategoriesQuery = groq`
    *[_type == 'category']{
      _id, title
    }`;

  const response =
    await fetchSanityContent<CategoriesQueryResult>(CategoriesQuery);

  return response.map((category) => ({
    ...category,
    urlParamReference: snakeCase(category.title ?? undefined),
  }));
};
