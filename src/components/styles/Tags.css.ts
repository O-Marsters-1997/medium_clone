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
    color: colors.text.primary.lighter,
    whiteSpace: "nowrap",
    outline: "none",
    cursor: "pointer",
    selectors: {
      "&[data-selected]": {
        color: colors.text.primary.main,
        border: "none",
      },
    },
  }),
  listItemBorder: style({
    display: "block",
    height: "1px",
    width: "100%",
    borderRadius: "5px",
    background: "black",
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
