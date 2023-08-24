import { create } from "zustand";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import Ingredient from "./models/ingredient";

const initialNodes: Node[] = [
  { id: "1", type: "ingredient", position: { x: 0, y: 0 }, data: { name: "Tomato", amount: 2 } },
];

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  updateIngredientData: (id: string, ingredientData: Partial<Ingredient>) => void;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  updateIngredientData: (id, ingredientData) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            ...ingredientData,
          };
        }

        return node;
      }),
    });
  },
}));

export default useStore;
