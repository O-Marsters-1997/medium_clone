import React, { type ReactNode } from "react";
import clsx from "clsx";
import { textVariants } from "~/styles/theme/typography.css";

type TextElementProps = {
  className: string;
};

type Props = {
  variant: keyof typeof textVariants;
  children: ReactNode;
  className?: string;
};

const textVariantsMap: Record<
  keyof typeof textVariants,
  React.ElementType<TextElementProps>
> = {
  body: "span",
  bodySm: "span",
  bodyLg: "span",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  navLink: "a",
  subtitle: "span",
};

const Text = ({ variant, children, className }: Props) => {
  return React.createElement(
    textVariantsMap[variant],
    {
      className: clsx(textVariants[variant], className),
    },
    children,
  );
};

export default Text;
