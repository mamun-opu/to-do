import React from 'react'
import { useState } from 'react/cjs/react.development';

const InputTask = ({todo, setTodo, todoList, setTodoList}) => {

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    

    const handleSubmit = (e) => {

        let is = todoList.some(task => task.name === todo)
        
        if(is === false && todo.length > 0){
            setTodoList([ ...todoList, {
                    name: todo,
                    id: `${Math.random()*1000}abc_xyz${Math.random()*1000}`
                }
             ]);
             setTodo('')
             setErrorMessage('')
        } else if(todo.length <= 0){
            setErrorMessage('please insert your task')
        } else{
            setErrorMessage('this task is already in the list')
        }
        
        e.preventDefault();
    }

    
    return (
        <div>
            {errorMessage}
            <form style = {{marginTop: '10px'}} onSubmit={handleSubmit}>
                <label>
                Name:
                <input
                    type="text"
                    value={todo}
                    onChange={handleChange}
                />
                </label>
                <input type="submit" value="add" />
            </form>
        </div>
    )
}

export default InputTask
