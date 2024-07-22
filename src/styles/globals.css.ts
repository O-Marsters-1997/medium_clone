import { style } from "@vanilla-extract/css";
import "~/styles/theme/typography.css";
import { colors } from "~/styles/theme/theme.css";
import "~/styles/base/index.css";
import "~/styles/components/index.css";

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
