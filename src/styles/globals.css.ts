import { globalStyle, style } from "@vanilla-extract/css";
import "~/styles/theme/typography.css";
import { colors, typograpghy } from "~/styles/theme/theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
});

globalStyle("body", {
  margin: 0,
  fontSize: "12px",
  fontFamily: typograpghy.body,
});

const baseStyles = {
  app: style({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  }),
};

export const styles = {
  app: style([
    baseStyles.app,
    {
      background: colors.bg.primary,
    },
  ]),
  main: style({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  }),
  link: style({
    textDecoration: "none",
    color: colors.text.primary,
  }),
};
