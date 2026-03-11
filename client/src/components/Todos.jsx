import React from 'react'
import Todo from './Todo'

const Todos = ({todos, setTodos}) => {
  return (
    <div>
        {todos.map((todo) =>
             <div key={todo._id}> <Todo todo = {todo} /> 
             </div>)
        }
    </div>
  )
}

export default Todos