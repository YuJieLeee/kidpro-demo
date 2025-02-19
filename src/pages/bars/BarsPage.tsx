import { Box } from "@mui/material";

import ChartjsBar from "./ChartjsBar";
import MuiBar from "./MuiBar";
import NivoBar from "./NivoBar";

export default function BarsPage() {
  return (
    <Box width="800px" height="800px">
      <ChartjsBar />
      <MuiBar />
      <NivoBar />
    </Box>
  );
}
