import { User } from "next-auth";
import React from "react";
import { styles } from "~/components/styles/Avatar.css";

type Props = {
  user: User;
};

const Avatar = async ({ user }: Props) => {
  return <div className={styles}>{user.name?.split("")[0]}</div>;
};

export default Avatar;
