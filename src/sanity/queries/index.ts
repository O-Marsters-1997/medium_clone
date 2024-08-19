import { groq } from "next-sanity";
import { PostsQueryResult } from "~/sanity/types";
import { fetchSanityContent } from "~/sanity/utils";

export const fetchPosts = async () => {
  const PostsQuery = groq`*[_type == 'post']{
  _id, title, body, publishedAt, author->{name}
}`;

  return await fetchSanityContent<PostsQueryResult>(PostsQuery);
};
