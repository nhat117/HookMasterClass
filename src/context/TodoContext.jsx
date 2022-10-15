import React, { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

	const [todos, setTodos] = useState([
		{ id: uuidv4(), title: "Viec1", completed: false },
		{ id: uuidv4(), title: "Viec2", completed: false },
		{ id: uuidv4(), title: "Viec3", completed: false },
	]);

    const addToDo = (title) => {
		const newTodo = {
			id: uuidv4(),
			title,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	}

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	}


    const todoContextData = {
        todos,
        addToDo,
        deleteTodo
    };

	//Return provider
	return (
		<TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
	);
}

export default TodoContextProvider