import { groq } from "next-sanity";
import { CategoriesQueryResult, PostsQueryResult } from "~/sanity/types";
import { fetchSanityContent } from "~/sanity/utils";
import { Post } from "~/types";

export const fetchPosts = async () => {
  const PostsQuery = groq`
    *[_type == 'post']{
      _id, title, body, publishedAt, author->{name}
    }`;

  return await fetchSanityContent<PostsQueryResult>(PostsQuery);
};

export const fetchCategories = async () => {
  const CategoriesQuery = groq`
    *[_type == 'category']{
      _id, title
    }`;

  return await fetchSanityContent<CategoriesQueryResult>(CategoriesQuery);
};
