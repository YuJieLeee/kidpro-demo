import type { BreakpointsOptions as MuiBreakpointsOptions } from "@mui/material";

export type TBreakpointsOptions = MuiBreakpointsOptions["values"] & {
  "2xl": number;
};

const breakpoints: MuiBreakpointsOptions & {
  values: TBreakpointsOptions;
} = {
  values: {
    xs: 480,
    sm: 600,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },
  // values: {
  //   xs: 0,
  //   sm: 600,
  //   md: 960,
  //   lg: 1280,
  //   xl: 1440,
  // },
};

export default breakpoints;
