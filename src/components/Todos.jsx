import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

import {ThemeContext} from "../context/ThemeContext";
import {TodoContext} from "../context/TodoContext";
import { AuthContext } from "../context/AuthContext";
const Todos = () => {
	const testContext = useContext(ThemeContext);
	const {isLightTheme, light, dark} = testContext.theme;
	const style = isLightTheme ? light : dark;

	const todoContext = useContext(TodoContext);
	const {todos} = todoContext;

	const authContext = useContext(AuthContext);
	const {isAuthenticated} = authContext;

	return (
		isAuthenticated ? (
			<div className='todo-list'>
			<TodoForm></TodoForm>
			<ul>
				{todos.map((todo) => (
					<TodoItem todo = {todo} key={todo.id}/>	
				))}
			</ul>
		</div>
		) : 
		(<h1 style={style}>Please login to view your todos</h1>)
	
	);
};

export default Todos;
