import React,{useContext} from 'react'
import {ThemeContext} from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({todo}) => {
  const todoContext = useContext(TodoContext);
	const {deleteTodo} = todoContext;

  const testContext = useContext(ThemeContext);
	const {isLightTheme, light, dark} = testContext.theme;
	const style = isLightTheme ? light : dark;

  return (
    <li onClick={deleteTodo.bind(this,todo.id)} style = {style}>{todo.title}</li>
  )
}

export default TodoItem