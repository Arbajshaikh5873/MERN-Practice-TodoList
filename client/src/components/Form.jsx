import React, { useState } from 'react'

function Form({formData, setFormData, todos, setTodos, editId}) {
    
    

    const handleChange = (e)=>{setFormData({...formData, [e.target.name]: e.target.value})}

    const handleSubmit = function (e) {
        e.preventDefault();
        if(editId){

        }else{
            const todo = {...formData, _id : Date.now().toString()};
            setTodos(prev => [...prev, todo]);
        }
        setFormData({title : "", description : "", due_date : "", status:""});
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            
            <div>
                <label >title</label>
                <input type="text" placeholder='enter title' name='title' value={formData.title} onChange={handleChange}/>
            </div>

            <div>
                <label >description</label>
                <input type="text" placeholder='enter description' name='description' value={formData.description} onChange={handleChange} />
            </div>

            <div>
                <label >due date</label>
                <input type="date" placeholder='enter due date' name='due_date' value={formData.due_date}  onChange={handleChange} />
            </div>

            <div>
                <label >status</label>
                <select name='status' value={formData.status} onChange={handleChange}>
                    <option value=""> Select Value</option>
                    <option value="pending">Pending</option>
                    <option value="complete">Complete</option>
                </select>
            </div>

            <div>
                <button type='submit'>add</button>
            </div>

        </form>

        </div>
    )
}

export default Form