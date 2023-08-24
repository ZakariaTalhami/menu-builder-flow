import {useState, useCallback} from 'react';

const ToggleThemeMode = () => {
    // TODO: move to state management store
    const [mode, setMode] = useState("light");
  
    const toggleMode = useCallback(() => {
        setMode((m) => (m === "light" ? "dark" : "light"));
      }, []);
  
    return (
        <div>
            <button onClick={toggleMode}>{mode}</button>
        </div>
    );
}

export default ToggleThemeMode;