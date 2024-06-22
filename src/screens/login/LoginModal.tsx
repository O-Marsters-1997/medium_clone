"use client";

import React from "react";
import Link from "~/components/Link";
import { routes } from "~/utils/routes";

const LoginModal = () => {
  return (
    <Link href={routes.home}>
      <div>LoginModal</div>
    </Link>
  );
};

export default LoginModal;
