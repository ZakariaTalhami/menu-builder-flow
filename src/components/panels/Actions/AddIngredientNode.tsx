import { XYPosition, useReactFlow } from "reactflow";
import useStore, { RFState } from "../../../store";

type AddIngredientNodeProps = {
  targetPosition?: XYPosition;
};

const selector = (state: RFState) => ({
  addIngredientNode: state.addIngredientNode,
});

const AddIngredientNode = ({ targetPosition }: AddIngredientNodeProps) => {
  const reactFlowInstance = useReactFlow();
  const { addIngredientNode } = useStore(selector);

  const onAddIngredientNode = () => {
    // Add Node at center of screen
    // TODO: Offset for the width and height
    // Of Node
    addIngredientNode(
      reactFlowInstance.project({
        x: targetPosition?.x || window.innerWidth / 2,
        y: targetPosition?.y || window.innerHeight / 2,
      })
    );
  };

  return (
    <div>
      <button onClick={onAddIngredientNode}>Add Ingredient</button>
    </div>
  );
};

export default AddIngredientNode;
