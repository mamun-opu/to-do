import { useState } from 'react';
import React from 'react';

export interface IInputProps{
    todo: string,
    setTodo: (todo: string) => void,
    todoList: any [],
    setTodoList: (todoList: any) => void
}

const InputTask = ({todo, setTodo, todoList, setTodoList}: IInputProps) => {

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setTodo(e.target.value)
    }
    
    const handleSubmit = (e: any) => {

        let isTaskExist = todoList.some(task => task.name === todo)
        e.preventDefault();

        if(todo.length <= 0){
            setErrorMessage('please insert your task')
            return;
        }
        if(isTaskExist){
            setErrorMessage('Hold on, this task is already in the list')
            return;
        }
        setTodoList([ ...todoList, {
            name: todo,
            id: `${Math.random()*1000}abc_xyz${Math.random()*1000}`,
            isComplete: false
        }
        ]);
        setTodo('')
        setErrorMessage('')
    }

    
    return (
        <div>
            <span style = {{fontWeight: 'bold', fontSize: 'larger', color: 'maroon'}}>{errorMessage}</span>
            <form style = {{marginTop: '10px'}} onSubmit={handleSubmit}>
                <label>
                <span style = {{fontSize: 'larger', fontWeight: 'bold', marginRight: '15px'}}>Name:</span>
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
