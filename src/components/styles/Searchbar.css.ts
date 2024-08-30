import { style } from "@vanilla-extract/css";
import { media, spacing } from "~/styles/variables.css";
import { colors } from "~/styles/theme/theme.css";
import { responsiveStyles } from "~/styles/utils";

export const styles = {
  mobile: style({
    display: "block",
    ...responsiveStyles("sm", { display: "none" }),
  }),
  searchWrapper: style({
    display: "none",
    alignItems: "center",
    borderRadius: spacing.s4,
    background: colors.muted.primary,
    padding: `${spacing.s2} ${spacing.s1}`,
    ...responsiveStyles("sm", { display: "flex" }),
  }),
};
