import React from "react";
import Banner from "~/components/Banner";
import Post from "~/components/Post";
import Tags from "~/components/Tags";
import PostSummaries from "~/screens/dashboard/PostSummaries";
import { getUser } from "~/utils/auth";

import "~/styles/pages/Dashboard.css";
import { SearchParams } from "~/types";

type Props = {
  searchParams: SearchParams;
};

const Dashboard = async ({ searchParams }: Props) => {
  const { role } = await getUser();

  return (
    <>
      {role !== "member" && <Banner />}
      <div className="page-layout">
        <PostSummaries
          className="explore-section"
          searchParams={searchParams}
        />
        <div className="sidebar">hello</div>
      </div>
    </>
  );
};

export default Dashboard;
