import { User } from "next-auth";
import Link from "next/link";
import React from "react";

import { styles } from "~/components/styles/Avatar.css";

type Props = {
  user: User;
};

const Avatar = ({ user }: Props) => {
  return (
    <Link href="?user_settings=true" className={styles.avatarLink}>
      <div className={styles.avatar}>{user.name?.split("")[0]}</div>
    </Link>
  );
};

export default Avatar;
