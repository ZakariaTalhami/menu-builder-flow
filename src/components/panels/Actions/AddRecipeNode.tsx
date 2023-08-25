import { useReactFlow } from "reactflow";
import useStore, { RFState } from "../../../store";

const selector = (state: RFState) => ({
  addRecipeNode: state.addRecipeNode,
});

const AddRecipeNode = () => {
  const reactFlowInstance = useReactFlow();
  const { addRecipeNode } = useStore(selector);

  const onAddRecipeNode = () => {
    console.log(reactFlowInstance);
    
    // Add Node at center of screen
    // TODO: Offset for the width and height
    // Of Node
    addRecipeNode(reactFlowInstance.project({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    }));
  };

  return (
    <div>
      <button onClick={onAddRecipeNode}>Add Recipe</button>
    </div>
  );
};

export default AddRecipeNode;
