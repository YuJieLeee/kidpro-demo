/* Mui */
import type { Components, Theme } from "@mui/material";
import { gray } from "./colors";

const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "hover",
    },
    styleOverrides: {
      root: {
        cursor: "pointer",
      },
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: "h6",
      },
    },
    styleOverrides: {
      action: {
        marginTop: "-4px",
        marginRight: "-4px",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "6px",
        boxShadow:
          "rgba(50, 50, 93, 0.025) 0px 2px 5px -1px, rgba(0, 0, 0, 0.05) 0px 1px 3px -1px",
        backgroundImage: "none",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
    },
  },
  MuiTypography: {
    defaultProps: {
      color: gray[500],
    },
  },

  ...({
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any),
};

export default components;
