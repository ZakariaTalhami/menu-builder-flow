import { useCallback } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import useStore, { RFState } from "../../store";
import { shallow } from "zustand/shallow";
import BaseNode from "./base/BaseNode";
import NodeDataRow from "./base/NodeDataRow";
import Ingredient from "../../models/ingredient";

const selector = (state: RFState) => ({
  updateIngredientData: state.updateIngredientData,
});

const IngredientsNode = (props: NodeProps<Ingredient>) => {
  const {id, data} = props;
  const { updateIngredientData } = useStore(selector, shallow);

  const onNameChange = useCallback((evt: any) => {
    updateIngredientData(id, {
      name: evt.target.value,
    });
  }, []);

  const onAmountChange = useCallback((evt: any) => {
    updateIngredientData(id, {
      amount: evt.target.value,
    });
  }, []);

  return (
    <BaseNode title="Ingredient" {...props}>
      <NodeDataRow label="Name" value={data.name} onChange={onNameChange} />
      <NodeDataRow label="Amount" type="number" value={data.amount} onChange={onAmountChange} />
      <Handle type="source" position={Position.Right} id="a" />
    </BaseNode>
  );
};

export default IngredientsNode;
