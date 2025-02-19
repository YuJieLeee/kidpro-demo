import type { Editor } from "grapesjs";
import "@grapesjs/studio-sdk/style";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import GrapesJsStudio from "@grapesjs/studio-sdk/react";
import "@grapesjs/studio-sdk/style";

export default function GrapeJsPage() {
  const [editor, setEditor] = useState<Editor>();

  const onReady = (editor: Editor) => {
    console.log("Editor loaded", editor);
    setEditor(editor);
  };

  const getExportData = () => {
    if (editor) {
      console.log({ html: editor?.getHtml(), css: editor?.getCss() });
      console.log("js:", editor.getJs());
    }
  };

  return (
    <Box>
      <Box height="50vh">
        <GrapesJsStudio
          onReady={onReady}
          options={{
            licenseKey: "YOUR_LICENSE_KEY",
            project: {
              default: {
                pages: [
                  {
                    name: "Home",
                    component: `<h1 style="padding: 2rem; text-align: center">
                      Hello Studio 👋
                    </h1>`,
                  },
                ],
              },
            },
          }}
        />
      </Box>
      <Button onClick={() => getExportData()}>Show Data</Button>
    </Box>
  );
}
