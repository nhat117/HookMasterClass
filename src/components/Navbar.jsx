import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
	//Load theme context
	const testContext = useContext(ThemeContext);
	const { isLightTheme, light, dark } = testContext.theme;
	const style = isLightTheme ? light : dark;
	//Load auth context
	const authContext = useContext(AuthContext);
	const { isAuthenticated, toggleAuth } = authContext;

	return (
		<div className='navbar' style={style}>
			<h1>My Hooks App</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				{isAuthenticated ? (
					<li>
						<button style={style} onClick={toggleAuth.bind(this)}>Logout</button>
					</li>
				) : (
					<li>
						<button style={style}  onClick={toggleAuth.bind(this)}>Login</button>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Navbar;
