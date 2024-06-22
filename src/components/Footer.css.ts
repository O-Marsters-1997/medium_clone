import { style } from "@vanilla-extract/css";
import { pagePadding } from "~/styles/utils";
import { colors } from "~/styles/theme.css";
import { media, spacing } from "~/styles/variables.css";

const baseFooterStyles = style([
  pagePadding("s5"),
  {
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
  },
]);

export const styles = {
  footerMobile: style([
    baseFooterStyles,
    {
      background: colors.bg.black,
      color: colors.text.secondary,
      display: "block",
      "@media": {
        [media.md]: {
          display: "none",
        },
      },
    },
  ]),
  footerDesktop: style([
    baseFooterStyles,
    {
      display: "none",
      borderTop: `1px solid ${colors.text.primary}`,
      "@media": {
        [media.md]: {
          display: "block",
        },
      },
    },
  ]),
  footerNav: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: spacing.s5,
    "@media": {
      [media.md]: {
        alignItems: "center",
      },
    },
  }),
  footerNavList: style({
    display: "flex",
    gap: spacing.s4,
    padding: 0,
    listStyle: "none",
    margin: 0,
  }),
  footerNavListItem: style({
    cursor: "pointer",
  }),
};
