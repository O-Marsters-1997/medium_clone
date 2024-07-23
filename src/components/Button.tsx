"use client";

import React, { type ReactNode } from "react";
import clsx from "clsx";
import { Button } from "react-aria-components";
import Link from "next/link";
import { buttonVariants } from "./styles/Button.css";
import { IconDefinition } from "~/components/icon/index";
import Icon from "~/components/Icon";

type Props = {
  children: ReactNode;
  variant: keyof typeof buttonVariants;
  href?: string;
  onPress?: () => void;
  icon?: IconDefinition;
  className?: string;
};

const MyButton = ({
  children,
  variant,
  href,
  onPress,
  icon,
  className,
}: Props) => {
  if (href !== undefined) {
    return (
      <Link href={href} className={clsx(className, buttonVariants[variant])}>
        {children}
      </Link>
    );
  }

  return (
    <Button
      type="submit"
      className={clsx(className, buttonVariants[variant])}
      onPress={onPress}
    >
      {icon && <Icon icon={icon} size="sm" />}
      {children}
    </Button>
  );
};

export default MyButton;
