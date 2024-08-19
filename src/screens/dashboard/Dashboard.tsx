import React from "react";
import Banner from "~/components/Banner";
import Post from "~/components/Post";
import { fetchPosts } from "~/sanity/queries";
import { getUser } from "~/utils";

const Dashboard = async () => {
  const posts = await fetchPosts();
  const user = await getUser();

  console.log(user);

  return (
    <>
      <Banner />
      {posts.map(({ _id, title }) => {
        if (title === null) {
          throw new Error("No title provided");
        }

        return <Post title={title} key={_id} />;
      })}
    </>
  );
};

export default Dashboard;
