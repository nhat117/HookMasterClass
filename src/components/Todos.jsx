import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
	const style = {
		background: "rgb(240, 240, 240)",
		color: "black",
	};

	const [todos, setTodos] = useState([
		{ id: 1, title: "Viec1", completed: false },
		{ id: 2, title: "Viec2", completed: false },
		{ id: 3, title: "Viec3", completed: false },
	]);

	return (
		<div className='todo-list'>
			<ul>
				{todos.map((todo) => (
					<TodoItem todo = {todo}/>	
				))}
			</ul>
		</div>
	);
};

export default Todos;
