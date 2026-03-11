import React, { useState } from 'react'
import Form from './Form';
import Todos from './Todos';

const TodoContainer = () => {

    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState({title : "", description : "", due_date : "", status:""});
    const [editId, setEditId] = useState(null);

  return (
    <div>
        <Form formData = {formData} setFormData = {setFormData} todos = {todos} setTodos = {setTodos} editId = {editId} setEditId = {setEditId}/>
        <Todos todos= {todos} setTodos = {setTodos} editId = {editId} setEditId = {setEditId} />
    </div>
  )
}

export default TodoContainer