"use client";

import React, { type ReactNode } from "react";
import { Button } from "react-aria-components";
import Link from "next/link";
import { buttonVariants } from "./styles/Button.css";

type Props = {
  children: ReactNode;
  variant: keyof typeof buttonVariants;
  href?: string;
  onPress?: () => void;
};

const MyButton = ({ children, variant, href, onPress }: Props) => {
  if (href !== undefined) {
    return (
      <Link href={href} className={buttonVariants[variant]}>
        {children}
      </Link>
    );
  }

  return (
    <Button type="submit" className={buttonVariants[variant]} onPress={onPress}>
      {children}
    </Button>
  );
};

export default MyButton;
