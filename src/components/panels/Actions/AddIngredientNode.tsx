import { useReactFlow } from "reactflow";
import useStore, { RFState } from "../../../store";

const selector = (state: RFState) => ({
  addIngredientNode: state.addIngredientNode,
});

const AddIngredientNode = () => {
  const reactFlowInstance = useReactFlow();
  const { addIngredientNode } = useStore(selector);

  const onAddIngredientNode = () => {
    console.log(reactFlowInstance);
    
    // Add Node at center of screen
    // TODO: Offset for the width and height
    // Of Node
    addIngredientNode(reactFlowInstance.project({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    }));
  };

  return (
    <div>
      <button onClick={onAddIngredientNode}>Add Ingredient</button>
    </div>
  );
};

export default AddIngredientNode;
