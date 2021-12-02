import React from 'react'
import { useState } from 'react/cjs/react.development';

const InputTask = ({todo, setTodo, todoList, setTodoList}) => {

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value)
        setTodo(e.target.value)
    }
    

    const handleSubmit = (e) => {

        let is = todoList.some(task => task.name === todo)
        
        if(is === false){
            setTodoList([ ...todoList, {
                    name: todo,
                    id: `${Math.random()*1000}abc_xyz${Math.random()*1000}`
                }
             ]);
             setTodo('')
             setErrorMessage('')
        } else{
            setErrorMessage('This task is already in the list')
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
