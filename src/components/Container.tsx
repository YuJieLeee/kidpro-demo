import { useNode } from "@craftjs/core";
import { Paper } from "@mui/material";

export const Container = ({ background, padding = 0, children }: any) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      ref={(ref: HTMLElement | null) => ref && connect(drag(ref))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </Paper>
  );
};
