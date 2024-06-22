"use client";

import React, { type ReactNode } from "react";
import { Button } from "react-aria-components";
import { buttonVariants } from "./Button.css";

type Props = {
  children: ReactNode;
  variant: keyof typeof buttonVariants;
};

const MyButton = ({ children, variant }: Props) => {
  return <Button className={buttonVariants[variant]}>{children}</Button>;
};

export default MyButton;
