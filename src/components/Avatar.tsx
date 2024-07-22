"use client";

import { User } from "next-auth";
import React from "react";

import { styles } from "~/components/styles/Avatar.css";
import { useAuth } from "~/context/AuthContext";

type Props = {
  user: User;
};

const Avatar = ({ user }: Props) => {
  const { toggleUserSettingsVisibility } = useAuth();

  return (
    <div className={styles} onClick={toggleUserSettingsVisibility}>
      {user.name?.split("")[0]}
    </div>
  );
};

export default Avatar;
