import React, { type ReactNode } from "react";
import { textVariants } from "~/styles/theme/typography.css";

type Props = {
  variant: keyof typeof textVariants;
  children: ReactNode;
};

type TextElementProps = {
  className: string;
};

const textVariantsMap: Record<
  keyof typeof textVariants,
  React.ElementType<TextElementProps>
> = {
  body1: "span",
  body2: "span",
  h2: "h2",
  h3: "h3",
};

const Text = ({ variant, children }: Props) => {
  const TextElement = textVariantsMap[variant];

  return (
    <TextElement className={textVariants[variant]}>{children}</TextElement>
  );
};

export default Text;
