import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme/theme.css";
import { spacing } from "~/styles/variables.css";

export const styles = {
  modal: style({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: vars.colors.bg.primary,
    opacity: 0.8,
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 20,
    cursor: "default",
  }),
  modalWrapper: style({
    position: "relative",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 10px",
    padding: spacing.s6,
    zIndex: 25,
    opacity: 1,
    cursor: "default",
  }),
};
