import React from 'react'

const TodoItem = (props) => {

    const style = {
		background: "rgb(240, 240, 240)",
		color:'black'
	}

    const todo = props.todo
  return (
    <li style = {style}>{todo.title}</li>
  )
}

export default TodoItem