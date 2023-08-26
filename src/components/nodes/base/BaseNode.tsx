import { ReactNode } from "react";
import CustomNode from "./CustomNode";
import NodeHeader from "./NodeHeader";
import NodeBody from "./NodeBody";
import { NodeProps } from "reactflow";

type BaseNodeProps = {
  title: string;
  children: ReactNode;
};

function BaseNode({ title, children, ...props }: BaseNodeProps & NodeProps) {
  const baseProps = {
    selected: props.selected
  }
  
  return (
    <CustomNode {...baseProps}>
      <NodeHeader>{title}</NodeHeader>
      <NodeBody>{children}</NodeBody>
    </CustomNode>
  );
}

export default BaseNode;
