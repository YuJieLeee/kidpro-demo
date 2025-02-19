import { useNode } from "@craftjs/core";

export const Text = ({ text, fontSize }: any) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref as HTMLElement))}>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};

Text.craft = {
  rules: {
    canDrag: (node: { data: { props: { text: string } } }) =>
      node.data.props.text != "Drag",
  },
};
