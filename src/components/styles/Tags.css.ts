import { style } from "@vanilla-extract/css";
import { colors } from "~/styles/theme/theme.css";

export const styles = {
  tags: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    width: "100%",
    overflow: "hidden",
  }),
  listBoxWrapper: style({
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
  }),
  listBox: style({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    gap: "2em",
    margin: "0 2.5em",
  }),
  listItem: style({
    cursor: "pointer",
    color: colors.text.primary.lighter,
    outline: "none",
    whiteSpace: "nowrap",
    selectors: {
      "&[data-selected]": {
        color: colors.text.primary.main,
        border: "none",
      },
    },
  }),
  icon: style({
    cursor: "pointer",
  }),
  chevron: style({
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
