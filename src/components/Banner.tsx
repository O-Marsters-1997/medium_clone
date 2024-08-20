"use client";

import React, { useEffect, useState } from "react";
import Icon from "~/components/Icon";
import Link from "~/components/Link";
import { styles } from "~/components/styles/Banner.css";
import Text from "~/components/Text";
import { useMustAuth } from "~/context/AuthContext";
import { routes } from "~/utils/routes";

const Banner = () => {
  const { user } = useMustAuth();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const showBannerOnLoad =
      user.role !== "member" && !localStorage.getItem("bannerDismissed");
    setShowBanner(showBannerOnLoad);
  }, [user]);

  const { banner, wrapper, close } = styles;

  const handleBannerClose = () => {
    localStorage.setItem("bannerDismissed", "yes");

    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className={banner}>
          <div className={wrapper}>
            <Icon icon="star" color="secondary" size="sm" />
            <Text variant="bodySm">
              Get unlimited access to the best of Medium for less than $1/week.
            </Text>
            <Link href={routes.subscribe}>Become a member</Link>
          </div>
          <Icon
            icon="cross"
            color="primary"
            size="xs"
            className={close}
            onClick={handleBannerClose}
          />
        </div>
      )}
    </>
  );
};

export default Banner;
