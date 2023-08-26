import {MouseEventHandler, RefObject, useMemo } from "react";
import styled from "styled-components";
import AddIngredientNode from "./panels/Actions/AddIngredientNode";
import AddRecipeNode from "./panels/Actions/AddRecipeNode";

const ContextMenuWrapper = styled.div`
  background: ${props => props.theme.bg};
  border-style: solid;
  box-shadow: 10px 19px 20px rgba(0, 0, 0, 10%);
  position: absolute;
  z-index: 10;

  button {
    width: 100%;
  }
`;

type ContextMenuProps = {
  x: number;
  y: number;
  pane: RefObject<Element>;
  onClick?: MouseEventHandler;
};

export default function ContextMenu({ x, y, pane, ...props }: ContextMenuProps) {
  if (!pane?.current) return null;

  const paneBoundary = pane.current.getBoundingClientRect();
  const positionStyle = useMemo(
    () => ({
      top: y < paneBoundary.height - 200 ? y : "none",
      left: x < paneBoundary.width - 200 ? x : "none",
      right: x >= paneBoundary.width - 200 ? paneBoundary.width - x : "none",
      bottom: y >= paneBoundary.height - 200 ? paneBoundary.height - y : "none",
    }),
    [x, y, pane]
  );
  return (
    <ContextMenuWrapper style={{ ...positionStyle }} className="context-menu" {...props}>
        <AddIngredientNode targetPosition={{x, y}}/>
        <AddRecipeNode targetPosition={{x, y}}/>
    </ContextMenuWrapper>
  );
}
