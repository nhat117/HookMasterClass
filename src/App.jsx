import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import ThemeContextProvider from "./context/ThemeContext";
import TodoContextProvider from "./context/TodoContext";
import AuthContextProvider from "./context/AuthContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<ThemeContextProvider>
				<AuthContextProvider>
					<Navbar></Navbar>
					<TodoContextProvider>
						<Todos></Todos>
					</TodoContextProvider>
				</AuthContextProvider>
					<ThemeToggle></ThemeToggle>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
