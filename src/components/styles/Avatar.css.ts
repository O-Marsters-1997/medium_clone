import { style } from "@vanilla-extract/css";
import { colors } from "~/styles/theme/theme.css";
import { colorPalette, fontSizes } from "~/styles/variables.css";

export const styles = {
  avatarLink: style({
    textDecoration: "none",
  }),
  avatar: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "2rem",
    width: "2rem",
    borderRadius: "50%",
    fontSize: fontSizes.body,
    background: colorPalette.greenPrimary,
    color: colors.text.secondary,
    fontWeight: "bold",
    cursor: "pointer",
  }),
};
