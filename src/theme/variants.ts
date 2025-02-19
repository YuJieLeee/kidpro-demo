/* Mui */
import type { PaletteOptions } from "@mui/material";

import { gray, lightBlue, orange, teal } from "./colors";
import { THEMES } from "./themes";

export type Variant = {
  name: string;
  palette: PaletteOptions;
};

const defaultVariant: Variant = {
  name: THEMES.DEFAULT,
  palette: {
    mode: "light",
    primary: {
      main: teal[700],
      dark: orange[500],
      contrastText: "#fff",
    },
    secondary: {
      main: orange[600],
      dark: lightBlue[400],
      contrastText: "#fff",
    },
    background: {
      default: "#EBEBEB",
      paper: "#fff",
    },
    text: {
      primary: gray[500],
      secondary: "#00000088",
    },
  },
};

const variants: Array<Variant> = [defaultVariant];

export default variants;
