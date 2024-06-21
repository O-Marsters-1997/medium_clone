import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colors } from "~/styles/theme.css";

export const styles = style({
  width: "auto",
  height: "1.5rem",
  "@media": {
    [`screen and (min-width: ${breakpoints.sm})`]: {
      height: "1.75rem",
    },
  },
});
