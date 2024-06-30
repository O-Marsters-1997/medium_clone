"use client";

import React, { type ReactNode } from "react";
import { Button } from "react-aria-components";
import Link from "next/link";
import { buttonVariants } from "./Button.css";

type Props = {
  children: ReactNode;
  variant: keyof typeof buttonVariants;
  href?: string;
};

const MyButton = ({ children, variant, href }: Props) => {
  if (href !== undefined) {
    return (
      <Link href={href} className={buttonVariants[variant]}>
        {children}
      </Link>
    );
  }

  return <Button className={buttonVariants[variant]}>{children}</Button>;
};

export default MyButton;
