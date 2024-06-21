import { style } from "@vanilla-extract/css";
import { media, spacing } from "./variables.css";

export const pagePadding = (py?: keyof typeof spacing) => {
  const paddingY = spacing[py!] ?? spacing.s2;

  return style({
    padding: `${paddingY} ${spacing.s7}`,
    "@media": {
      [media.md]: {
        padding: `${paddingY} ${spacing.s8}`,
      },
    },
  });
};
