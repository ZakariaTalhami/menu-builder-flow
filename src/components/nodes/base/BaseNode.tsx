import { ReactNode } from "react";
import CustomNode from "./CustomNode";
import NodeHeader from "./NodeHeader";
import NodeBody from "./NodeBody";

type BaseNodeProps = {
  title: string;
  children: ReactNode;
};

function BaseNode({ title, children }: BaseNodeProps) {
  return (
    <CustomNode>
      <NodeHeader>{title}</NodeHeader>
      <NodeBody>{children}</NodeBody>
    </CustomNode>
  );
}

export default BaseNode;
