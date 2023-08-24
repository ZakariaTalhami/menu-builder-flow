import { ChangeEventHandler } from "react";
import styled from "styled-components";

const NodeDataRowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

type NodeDateRowProps = {
  label: string;
  value: number | string;
  type?: "text" | "number";
  onChange: ChangeEventHandler;
};

function NodeDataRow({ label, value, type, onChange }: NodeDateRowProps) {
  type = type || "text";
  return (
    <NodeDataRowWrapper>
      <label htmlFor={label}>{label}:</label>
      <input
        id={label}
        name={label}
        type={type}
        value={value}
        onChange={onChange}
        className="nodrag"
      />
    </NodeDataRowWrapper>
  );
}

export default NodeDataRow;
