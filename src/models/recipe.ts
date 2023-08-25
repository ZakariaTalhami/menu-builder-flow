import { Node, XYPosition } from "reactflow";
import { v4 as uuidv4 } from "uuid";

interface Recipe {
  name: string;
}

export const defaultRecipeData = {
  name: "",
};

export type RecipeNodeData = Node<Recipe> & {
  type: "recipe";
};

export const recipeNodeGenerator = (position: XYPosition): RecipeNodeData => {
  return {
    id: uuidv4(),
    type: "recipe",
    position,
    data: defaultRecipeData,
  };
};

export default Recipe;
