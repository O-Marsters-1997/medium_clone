"use client";

import { useRouter } from "next/navigation";
import React, { type ReactNode } from "react";
import { useGetSearchParams } from "~/hooks/navigation";
import { styles } from "~/styles/globals.css";
import { routes } from "~/utils/routes";

type Props = {
  children: ReactNode;
};

const AppWrapper = ({ children }: Props) => {
  const router = useRouter();
  const searchParams = useGetSearchParams("user_settings");

  const handleUserSettingsClose = () => {
    if (searchParams !== null) {
      router.push(routes.home);
    }
  };

  return (
    <div className={styles.main} onClick={handleUserSettingsClose}>
      {children}
    </div>
  );
};

export default AppWrapper;
