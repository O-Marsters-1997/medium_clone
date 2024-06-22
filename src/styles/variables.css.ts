import { style } from "@vanilla-extract/css";

export const colorPalette = {
  primary: "hsl(47,33%,95%)",
  bold: "red",
  white: "white",
  black: "black",
  btnPrimary: "hsl(0,0%,10%)",
  btnSecondary: "hsl(119,71%,31%)",
} as const;

const breakpoints = {
  xxs: "0px",
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;

export const media = {
  xs: `screen and (min-width: ${breakpoints.xs})`,
  sm: `screen and (min-width: ${breakpoints.sm})`,
  md: `screen and (min-width: ${breakpoints.md})`,
  lg: `screen and (min-width: ${breakpoints.lg})`,
  xl: `screen and (min-width: ${breakpoints.xl})`,
} as const;

export const fontSizes = {
  bodySm: ".8rem",
  body: "1rem",
  bodyLg: "1.2rem",
  h2: style({
    fontSize: "3.5rem",
    "@media": {
      [media.lg]: {
        fontSize: "5.65rem",
      },
    },
  }),
  h3: style({
    fontSize: "1.25rem",
    "@media": {
      [media.lg]: {
        fontSize: "1.4rem",
      },
    },
  }),
  interactive: style({
    fontSize: ".75rem",
    "@media": {
      [media.lg]: {
        fontSize: ".875rem",
      },
    },
  }),
} as const;

export const spacing = {
  s0: 0,
  s1: ".25rem",
  s2: ".5rem",
  s3: ".75rem",
  s4: "1rem",
  s5: "1.5rem",
  s6: "2rem",
  s7: "2.5rem",
  s8: "5rem",
  s9: "7.5rem",
  s10: "10rem",
  s11: "15rem",
  s12: "22.5rem",
  s13: "30rem",
  s14: "45rem",
  s15: "60rem",
} as const;
