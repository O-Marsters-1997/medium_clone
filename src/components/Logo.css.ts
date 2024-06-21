import { style } from "@vanilla-extract/css";
import { media } from "~/styles/variables.css";

export const styles = style({
  width: "auto",
  height: "1.4rem",
  "@media": {
    [media.md]: {
      height: "1.75rem",
    },
  },
});
