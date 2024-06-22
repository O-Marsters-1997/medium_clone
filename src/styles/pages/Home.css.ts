import { style } from "@vanilla-extract/css";
import { spacing } from "../variables.css";

const styles = {
  heroContainer: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%",
  }),
  heroWrapper: style([
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "1.5rem",
      margin: `0 ${spacing.s5}`,
      maxWidth: spacing.s15,
    },
  ]),
};

export default styles;
