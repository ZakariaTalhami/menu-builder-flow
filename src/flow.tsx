import { useState, useRef, useCallback, MouseEventHandler } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  NodeTypes,
  XYPosition,
} from "reactflow";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "./store";

import "reactflow/dist/style.css";
import IngredientsNode from "./components/nodes/IngredientsNode";
import RecipeNode from "./components/nodes/RecipeNode";
import ContextMenu from "./components/ContextMenu";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const nodeTypes: NodeTypes = {
  ingredient: IngredientsNode,
  recipe: RecipeNode,
};

function Flow({ children }: any) {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(selector, shallow);
  const [menu, setMenu] = useState<XYPosition | null>(null);
  const ref = useRef(null);

  const onNodeContextMenu = useCallback<MouseEventHandler>(
    (event) => {
      // Prevent native context menu from showing
      event.preventDefault();
      setMenu({
        x: event.clientX,
        y: event.clientY,
      });
    },
    [setMenu]
  );

  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        ref={ref}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneClick={onPaneClick}
        onContextMenu={onNodeContextMenu}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        {children}
        {menu && <ContextMenu onClick={onPaneClick} pane={ref} {...menu} />}
      </ReactFlow>
    </div>
  );
}

export default Flow;
