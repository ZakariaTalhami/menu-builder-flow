import { Node, XYPosition } from "reactflow";
import { v4 as uuidv4 } from "uuid";

interface Ingredient {
  name: string;
  amount: number;
}

export const defaultIngredientData: Ingredient = {
  name: "",
  amount: 0,
};

export type IngredientNodeData = Node<Ingredient> & {
  type: "ingredient";
};

export const ingredientNodeGenerator = (position: XYPosition): IngredientNodeData => {
  return {
    id: uuidv4(),
    type: "ingredient",
    position,
    data: defaultIngredientData,
  };
};

export default Ingredient;
