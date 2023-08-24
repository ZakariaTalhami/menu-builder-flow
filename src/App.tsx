import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";
import Flow from "./flow";
import ActionBar from "./components/panels/ActionBar";

export default function App() {
  const [mode, setMode] = useState("light");
  const theme = mode === "light" ? lightTheme : darkTheme;

  const toggleMode = () => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <Flow>
        <ActionBar />
      </Flow>
    </ThemeProvider>
  );
}
