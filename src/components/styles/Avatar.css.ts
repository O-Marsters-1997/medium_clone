import { style } from "@vanilla-extract/css";
import { colors } from "~/styles/theme/theme.css";
import { colorPalette, fontSizes, media } from "~/styles/variables.css";

export const styles = {
  avatarLink: style({
    textDecoration: "none",
  }),
  avatar: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "1.55rem",
    width: "1.55rem",
    borderRadius: "50%",
    fontSize: fontSizes.bodySm,
    background: colorPalette.greenPrimary,
    color: colors.text.secondary,
    fontWeight: "bold",
    cursor: "pointer",

    "@media": {
      [media.sm]: {
        height: "1.7rem",
        width: "1.7rem",
        fontSize: fontSizes.body,
      },
    },
  }),
};
