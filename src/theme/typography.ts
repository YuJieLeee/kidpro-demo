import type { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: "inherit",
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h2: {
    fontSize: "28px",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h3: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h4: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: 1.25,
  },
  h5: {
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  h6: {
    fontSize: "17px",
    fontWeight: 500,
    lineHeight: 1.25,
  },
  body1: {
    fontSize: 14,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.5,
  },
  button: {
    textTransform: "none",
  },
};

export default typography;
