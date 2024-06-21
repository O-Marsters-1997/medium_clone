import { style } from "@vanilla-extract/css";
import { pagePadding } from "~/styles/utils";
import { colors } from "~/styles/theme.css";
import { media, spacing } from "~/styles/variables.css";

export const styles = {
  header: style([
    pagePadding(),
    {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      borderBottom: `1px solid ${colors.text.primary}`,
    },
  ]),
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
    padding: `0 ${spacing.s2}`,
  }),
  navListItem: style({
    display: "none",
    "@media": {
      [media.md]: {
        display: "block",
      },
    },
  }),
};
