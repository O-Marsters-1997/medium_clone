import React from "react";

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  return <div>My Post: {params.slug}</div>;
};

export default Page;
