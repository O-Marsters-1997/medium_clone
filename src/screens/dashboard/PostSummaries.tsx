import React from "react";
import Post from "~/components/Post";
import Tags from "~/components/Tags";
import { fetchCategories, fetchPosts } from "~/sanity/queries";
import { SearchParams } from "~/types";
import { getUrlSearchParam } from "~/utils";

type Props = {
  searchParams: SearchParams;
  className: string;
};

const PostSummaries = async ({ searchParams, className }: Props) => {
  const selectedTag = getUrlSearchParam(searchParams, "tag");
  const categories = await fetchCategories();

  const posts = await fetchPosts(selectedTag);

  return (
    <div className={className}>
      <Tags categories={categories} />
      {posts.map(({ _id, title }) => {
        return <Post title={title!} key={_id} />;
      })}
    </div>
  );
};

export default PostSummaries;
