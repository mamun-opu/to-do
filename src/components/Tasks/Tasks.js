import React, { useContext, useState } from 'react';
import { taskContext } from '../../App';
import CompletedTask from '../CompletedTask/CompletedTask';
import InputTask from '../InputTask/InputTask';

import Task from '../Task/Task';

const Tasks = () => {
    const [todoList, setTodoList] = useContext(taskContext)
    const [todo, setTodo] = useState(''); 
    const [completedTodoList, setCompletedTodoList] = useState([])

//handling delete task
    const handleDelete = (key) => {
        let currentList = [...todoList]
        const newTodoList = currentList.filter(task => task.id !== key) 
        setTodoList(newTodoList)
    }
//removing completed task from list and adding them to completed list
    const handleComplete = (key) => {
        let currentTodoList = [...todoList]
        const newTodoList = currentTodoList.filter(task => task.id !== key)
        const newCompletedTodo = currentTodoList.filter(task => task.id === key);
        setCompletedTodoList([
            ...completedTodoList, ...newCompletedTodo
        ])
        setTodoList(newTodoList);
    }
//removing completed task from completed and adding them to main list
    const handleRedo = (key) => {
        let currentCompletedTodoList = [...completedTodoList]
        const newCompletedTodoList = currentCompletedTodoList.filter(task => task.id !== key)
        const newTodo = currentCompletedTodoList.filter(task => task.id === key);
        setTodoList([
            ...todoList, ...newTodo
        ])
        setCompletedTodoList(newCompletedTodoList);
    }
    
    return (
        <div>
            
            <InputTask todo = {todo} setTodo = {setTodo} todoList = {todoList} setTodoList = {setTodoList}/>
            
            {
                todoList.map((task, index) => 
                    <Task
                        deleteHandler = {() => handleDelete(task.id)}  
                        completeHandler = {() => {handleComplete(task.id)}}
                        name = {task.name} key = {task.id} id = {task.id}
                        taskNumber = {index}
                    />)
            }
            {
                completedTodoList.length <= 0 ? <h2>No task has done yet</h2> : <h2> Congratulations</h2>
            }
            {
                completedTodoList.map((task) => {
                    return <CompletedTask  
                    name = {task.name} 
                    key = {task.id} 
                    redoHandler = {() => handleRedo(task.id)}/>
                })
            }
            
        </div>
    );
};


export default Tasks;