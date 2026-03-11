import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <div>{todo.due_date}</div>
      <div>{todo.status}</div>
    </div>
  )
}

export default Todo