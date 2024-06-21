export const colorPalette = {
  primary: "hsl(47,33%,95%)",
  bold: "red",
  white: "white",
  black: "black",
  btnPrimary: "hsl(0,0%,10%)",
  btnSecondary: "hsl(119,71%,31%)",
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
