import React, { useContext, useState } from 'react';
import { TaskContext } from '../../App';
// import { taskContext } from '../../App';
import CompletedTask from '../CompletedTask/CompletedTask';
import InputTask from '../InputTask/InputTask';

import Task from '../Task/Task';

const Tasks = () => {
    const {todoList, setTodoList} = useContext(TaskContext);

    
    const [todo, setTodo] = useState(''); 


    const handleDelete = (key: string) => {
        let currentList = [...todoList]
        const newTodoList = currentList.filter(task => task.id !== key) 
        setTodoList(newTodoList)
    }

    const handleComplete = (key: string) => {
        let newTodoList = [...todoList]
        const taskIndex = newTodoList.findIndex(task => task.id === key)
        newTodoList[taskIndex].isCompleted = true;
        
        setTodoList(newTodoList);
    }

    const handleRedo = (key: string) => {
        let newTodoList = [...todoList]
        const taskIndex = newTodoList.findIndex(task => task.id === key)
        newTodoList[taskIndex].isCompleted = false;
        
        setTodoList(newTodoList);
        
    }
    
    return (
        <div>
            
            <InputTask todo = {todo} setTodo = {setTodo} todoList = {todoList} setTodoList = {setTodoList}/>
            
            {
                
                todoList.map((todo, index) => {
                    return(
                        !todo?.isCompleted ?
                            (
                                <Task
                                deleteHandler = {() => handleDelete(todo.id)}  
                                completeHandler = {() => {handleComplete(todo.id)}}
                                name = {todo.name} key = {todo.id} id = {todo.id}
                                taskNumber = {index}
                                />
                            ) : ''
                    )
                    
                })
            }
            {
                todoList.some(todo => !todo.isCompleted) ? <h2>No task has done yet</h2> : <h2> Congratulations</h2>
            }
            {
                todoList.map((todo: any) =>  {
                    return (
                        todo?.isCompleted ? (
                            <CompletedTask
                                name = {todo.name}
                                redoHandler = {() =>handleRedo(todo.id)}
                                key = {todo.id}
                            />
                        ): ''
                    )
                })
            }
        </div>
    );
};


export default Tasks;