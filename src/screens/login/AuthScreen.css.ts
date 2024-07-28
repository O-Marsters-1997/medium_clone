import { style } from "@vanilla-extract/css";
import { spacing } from "~/styles/variables.css";

export const styles = {
  modalActions: style({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing.s3,
  }),

  modalSubtitle: {
    primary: style({}),
    secondary: style({}),
  },
};
