import { style } from "@vanilla-extract/css";

const styles = {
  heroContainer: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%",
  }),
  heroWrapper: style({}),
};

export default styles;
