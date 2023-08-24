import ReactFlow, { MiniMap, Controls, Background, BackgroundVariant, NodeTypes } from "reactflow";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "./store";

import "reactflow/dist/style.css";
import IngredientsNode from "./components/nodes/IngredientsNode";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const nodeTypes: NodeTypes = {
  ingredient: IngredientsNode,
};

function Flow({ children }: any) {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(selector, shallow);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        {children}
      </ReactFlow>
    </div>
  );
}

export default Flow;
