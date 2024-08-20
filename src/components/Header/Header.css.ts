import { style } from "@vanilla-extract/css";
import { pagePadding } from "~/styles/utils";
import { colors } from "~/styles/theme/theme.css";
import { media, spacing } from "~/styles/variables.css";

export const styles = {
  header: style([
    pagePadding(),
    {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      borderBottom: `1px solid ${colors.muted.primary}`,
    },
  ]),
  logoWrapper: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  }),
  navigation: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    marginLeft: "auto",
  }),
  navList: style({
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5em",
    listStyle: "none",
    padding: `0 ${spacing.s2}`,
  }),
  navListItem: style({
    display: "none",
    color: colors.text.primary.main,
    textDecoration: "none",
    cursor: "pointer",
    "@media": {
      [media.md]: {
        display: "block",
      },
    },
  }),
};
