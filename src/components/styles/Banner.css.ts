import { style } from "@vanilla-extract/css";
import { colors } from "~/styles/theme/theme.css";

export const styles = {
  banner: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em",
    background: colors.muted.lighter,
  }),
  wrapper: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1em",
  }),
  close: style({
    position: "absolute",
    right: "2%",
  }),
};
