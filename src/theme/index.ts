/* MUI */
import { createTheme as createMuiTheme } from "@mui/material";

import breakpoints from "./breakpoints";
import components from "./components";
import { THEMES } from "./themes";
import typography from "./typography";
import variants from "./variants";

const createTheme = (themeName: keyof typeof THEMES) => {
  const themeConfig =
    variants.find((variant) => variant.name === themeName) || variants[0];

  return createMuiTheme(
    {
      spacing: 4,
      breakpoints,
      components,
      typography,
      palette: themeConfig.palette,
    },
    {
      ...themeConfig,
    }
  );
};

export default createTheme;
