import { useCallback } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import Recipe from "../../models/recipe";
import BaseNode from "./base/BaseNode";
import NodeDataRow from "./base/NodeDataRow";
import useStore, { RFState } from "../../store";

const selector = (state: RFState) => ({
  updateRecipeData: state.updateRecipeData,
});

const RecipeNode = (props: NodeProps<Recipe>) => {
  const { id, data } = props;
  const { updateRecipeData } = useStore(selector);

  const onNameChange = useCallback((evt: any) => {
    updateRecipeData(id, {
      name: evt.target.value,
    });
  }, []);

  return (
    <BaseNode title="Recipe" {...props}>
      <Handle type="target" position={Position.Left} id="a" />
      <NodeDataRow label="Name" value={data.name} onChange={onNameChange} />
    </BaseNode>
  );
};

export default RecipeNode;
