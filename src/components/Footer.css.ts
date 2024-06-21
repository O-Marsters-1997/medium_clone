import { style } from "@vanilla-extract/css";
import { colors } from "~/styles/theme.css";

export const styles = {
  footer: style({
    marginTop: "auto",
    background: colors.bg.black,
    color: colors.text.secondary,
  }),
  footerNavList: style({
    listStyle: "none",
    display: "flex",
    gap: ".5rem",
  }),
};
