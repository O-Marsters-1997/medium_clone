import { style } from "@vanilla-extract/css";
import { spacing } from "~/styles/variables.css";

export const styles = {
  modalActions: style({
    position: "relative",
    minWidth: "18rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing.s3,
  }),
  modalActionForm: style({
    position: "relative",
    width: "100%",
  }),
};
