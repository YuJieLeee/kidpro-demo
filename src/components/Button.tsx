import { useNode } from "@craftjs/core";
import { Button as MaterialButton } from "@mui/material";

export const Button = ({ size, variant, color, children }: any) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <MaterialButton
      ref={(ref) => ref && connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
    >
      {children}
    </MaterialButton>
  );
};
