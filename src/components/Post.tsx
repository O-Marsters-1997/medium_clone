import React from "react";

type Props = {
  title: string;
};

const Post = ({ title }: Props) => {
  return <div>{title}</div>;
};

export default Post;
