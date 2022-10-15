import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

// Path: hook-master/src/context/ThemeContext.jsx
const ThemeContextProvider = ({children}) => {
	const [theme, setTheme] = useState({
		isLightTheme: true,
		light: { background: "rgb(240, 240, 240)", color: "black" },
		dark: { background: "rgb(0, 0, 0)", color: "white" },
	});

    const toggleTheme = () => {
        setTheme({...theme, isLightTheme: !theme.isLightTheme})
    }

	const themeContextData = {
		theme,
        toggleTheme
    };

	//Return provider
	return (
		<ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
	);
}
export default ThemeContextProvider
