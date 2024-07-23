import { style } from "@vanilla-extract/css";
import { colors } from "~/styles/theme/theme.css";
import { spacing } from "~/styles/variables.css";

export const styles = {
  userSettingsContainer: style({
    position: "absolute",
    top: "11%",
    right: "2.5%",
    background: colors.bg.primary,
    boxShadow: "2px 6px 21px -2px rgba(0,0,0,0.25)",
  }),
  settingGroup: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: spacing.s4,
    padding: `${spacing.s4} ${spacing.s8} ${spacing.s4} ${spacing.s4}`,
  }),
  settingItem: style({
    display: "flex",
    alignItems: "center",
    gap: spacing.s3,
    cursor: "pointer",
    color: colors.text.muted,
  }),
};
