"use client";

import React, { type ReactNode } from "react";
import { clsx } from "clsx";
import { Link as BaseLink } from "react-aria-components";
import { fontSizes } from "~/styles/variables.css";
import { styles } from "~/styles/globals.css";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

const Link = ({ href, children, className }: Props) => {
  return (
    <BaseLink
      href={href}
      className={clsx(styles.link, fontSizes.interactive, className)}
    >
      {children}
    </BaseLink>
  );
};

export default Link;
