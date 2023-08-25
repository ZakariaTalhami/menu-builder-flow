import { Panel } from "reactflow";
import styled from "styled-components";
import ToggleThemeMode from "./Actions/ToggleThemeMode";
import AddIngredientNode from "./Actions/AddIngredientNode";
import AddRecipeNode from "./Actions/AddRecipeNode";

const ActionBarContainer = styled(Panel)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 0;
  background: white;
  border-bottom: black solid 1px;
  padding: 5px;
`;

const ActionBar = () => {
  return (
    <ActionBarContainer position="top-left">
      <ToggleThemeMode />
      <AddIngredientNode />
      <AddRecipeNode />
    </ActionBarContainer>
  );
};

export default ActionBar;
