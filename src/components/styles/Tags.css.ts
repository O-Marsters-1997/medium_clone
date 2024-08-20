import { style } from "@vanilla-extract/css";
import { colors } from "~/styles/theme/theme.css";

export const styles = {
  tags: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
  }),
  listBox: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.15em",
  }),
  listItem: style({
    cursor: "pointer",
    color: colors.text.primary.lighter,
    selectors: {
      "&[data-selected]": {
        textDecoration: "underline",
        textUnderlineOffset: "1.25em",
        color: colors.text.primary.main,
        border: "none",
      },
    },
  }),
  icon: style({
    selectors: {
      "&:first-of-type": {
        transform: "rotate(270deg)",
      },
      "&:last-of-type": {
        transform: "rotate(90deg)",
      },
    },
  }),
};
