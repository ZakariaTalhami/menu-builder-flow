import { NodeProps } from "reactflow";
import styled from "styled-components";

type CustomNodeProps = {
  selected?: boolean;
}

const CustomNode = styled.div<CustomNodeProps>`
  border-radius: 5px;
  background: ${(props) => props.theme.node.bg};
  color: ${(props) => props.theme.node.color};
  border: 1px solid
    ${(props) => (props.selected ? props.theme.primary : props.theme.node.border)};

  .react-flow__handle {
    background: ${(props) => props.theme.nodeHandle.color};
    width: 7px;,
    height: 7px;
    border-radius: 7px;
    border: 1px solid
      ${(props) => (props.selected ? props.theme.primary : props.theme.nodeHandle.borderColor)};

    &:hover {
      background: ${(props) => props.theme.nodeHandle.hoverColor};
    }
  }
`;

export default CustomNode;
