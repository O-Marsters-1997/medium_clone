import React from "react";
import Post from "~/components/Post";
import Tags from "~/components/Tags";
import { fetchCategories, fetchPosts } from "~/sanity/queries";

type Props = {
  className: string;
};

const PostSummaries = async ({ className }: Props) => {
  const posts = await fetchPosts();
  const categories = await fetchCategories();
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
