import { style } from "@vanilla-extract/css";
import { spacing } from "~/styles/variables.css";
import { colors } from "~/styles/theme/theme.css";

export const styles = {
  searchWrapper: style({
    display: "flex",
    alignItems: "center",
    borderRadius: spacing.s4,
    background: colors.muted.primary,
    padding: `${spacing.s2} ${spacing.s1}`,
  }),
};
