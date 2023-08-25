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
  XYPosition,
} from "reactflow";
import Ingredient, { ingredientNodeGenerator } from "./models/ingredient";
import Recipe, { recipeNodeGenerator } from "./models/recipe";

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
  addIngredientNode: (position: XYPosition) => void;
  updateRecipeData: (id: string, ingredientData: Partial<Recipe>) => void;
  addRecipeNode: (position: XYPosition) => void;
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
  addIngredientNode: (position) => {
    const nodes = get().nodes;
    set({
      nodes: [...nodes, ingredientNodeGenerator(position)],
    });
  },
  updateRecipeData: (id, recipeData) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            ...recipeData,
          };
        }

        return node;
      }),
    });
  },
  addRecipeNode: (position) => {
    const nodes = get().nodes;
    set({
      nodes: [...nodes, recipeNodeGenerator(position)],
    });
  },
}));

export default useStore;
