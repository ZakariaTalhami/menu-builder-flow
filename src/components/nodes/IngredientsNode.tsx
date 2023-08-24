import { useCallback } from "react";
import { Handle, Node, NodeProps, Position } from "reactflow";

type NodeData = {
  value: number;
};

type CustomNode = Node<NodeData>;

const IngredientsNode = ({ data }: NodeProps<NodeData>) => {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);
  return (
    <div>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default IngredientsNode;
