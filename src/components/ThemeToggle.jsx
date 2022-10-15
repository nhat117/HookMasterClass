import React,{useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
	const testContext = useContext(ThemeContext);
	const {isLightTheme, light, dark} = testContext.theme;
	const style = isLightTheme ? light : dark;
	return (
		<div className='toggle-btn'>
			<button onClick={toggleTheme.bind(this)} style={style}>Toggle Theme</button>
		</div>
	);
};

export default ThemeToggle;
