// pages/index.js

import { Typography, Paper, Grid, Grid2, Box } from "@mui/material";

import { Toolbox } from "../../components/Toolbox";
import { SettingsPanel } from "../../components/SettingPanel";
import { Topbar } from "../../components/TopBar";

import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Text } from "../../components/Text";
import { Editor, Frame, Element } from "@craftjs/core";

export default function CraftJsPage() {
  return (
    <div>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Topbar />
      <Editor resolver={{ Card, Button, Text, Container }}>
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)">
          <Box sx={{ gridColumn: "span 3" }}>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button size="small" variant="outlined">
                  Click
                </Button>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={6} background="#999" canvas>
                  <Text size="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Box>

          <Box sx={{ gridColumn: "span 1" }}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Box>
        </Box>
      </Editor>
    </div>
  );
}
