import React,{useState, useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
    const todoContext = useContext(TodoContext);
    const {addToDo} = todoContext;


    const[title,setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo(title)
        setTitle('')
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const testContext = useContext(ThemeContext);
	const {isLightTheme, light, dark} = testContext.theme;
	const style = isLightTheme ? light : dark;


	return (
		<form onSubmit={handleSubmit}>
			<input type='text' name='title' onChange={onTitleChange} required value={title} placeholder='Enter a new todo...' />
			<input type='submit' style={style} value='Add' />
		</form>
	);
};

export default TodoForm;
