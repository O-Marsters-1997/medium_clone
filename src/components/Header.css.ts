import { style } from "@vanilla-extract/css";
import { colors, breakpoints } from "~/styles/theme.css";

export const styles = {
  header: style({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: ".5em 2.5em",
    borderBottom: `1px solid ${colors.text.primary}`,
  }),
  logo: style({
    width: "auto",
    height: "1.5rem",
    "@media": {
      [`screen and (min-width: ${breakpoints.sm})`]: {
        height: "1.75rem",
      },
    },
  }),
  navigation: style({
    marginLeft: "auto",
  }),
  navList: style({
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5em",
    listStyle: "none",
    cursor: "pointer",
    padding: "0 .5rem",
  }),
  navListItem: style({
    display: "none",
    "@media": {
      [`screen and (min-width: ${breakpoints.md})`]: {
        display: "block",
      },
    },
  }),
};
