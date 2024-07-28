import { style } from "@vanilla-extract/css";
import { colors, utils } from "~/styles/theme/theme.css";
import { media, spacing } from "~/styles/variables.css";

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
    maxWidth: "50rem",
    padding: spacing.s6,
    zIndex: 25,
    cursor: "default",
    fontSize: "3.5rem",
    "@media": {
      [media.sm]: {
        margin: "10%",
      },
    },
  }),
  modalContent: style({
    display: "flex",
    flexDirection: "column",
    gap: spacing.s8,
    marginTop: "5rem",
    alignItems: "center",
  }),
  modalIcon: style({
    position: "absolute",
    right: "5%",
  }),
};
