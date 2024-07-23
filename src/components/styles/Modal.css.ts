import { style } from "@vanilla-extract/css";
import { colors, utils } from "~/styles/theme/theme.css";
import { spacing } from "~/styles/variables.css";

export const styles = {
  modalContainer: style({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: colors.bg.tertiary.transparent,
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 20,
    cursor: "default",
  }),
  modal: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing.s8,
    position: "relative",
    background: colors.bg.tertiary.main,
    boxShadow: utils.boxShadow,
    height: "100%",
    width: "100%",
    margin: "10%",
    padding: spacing.s10,
    zIndex: 25,
    cursor: "default",
  }),
};
