import { XYPosition, useReactFlow } from "reactflow";
import useStore, { RFState } from "../../../store";

type AddRecipeNodeProps = {
  targetPosition?: XYPosition;
};

const selector = (state: RFState) => ({
  addRecipeNode: state.addRecipeNode,
});

const AddRecipeNode = ({ targetPosition }: AddRecipeNodeProps) => {
  const reactFlowInstance = useReactFlow();
  const { addRecipeNode } = useStore(selector);

  const onAddRecipeNode = () => {
    // Add Node at center of screen
    // TODO: Offset for the width and height
    // Of Node
    addRecipeNode(
      reactFlowInstance.project({
        x: targetPosition?.x || window.innerWidth / 2,
        y: targetPosition?.y || window.innerHeight / 2,
      })
    );
  };

  return (
    <div>
      <button onClick={onAddRecipeNode}>Add Recipe</button>
    </div>
  );
};

export default AddRecipeNode;
