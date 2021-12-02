import React, { useState } from 'react';
import CompletedTask from '../CompletedTask/CompletedTask';
import InputTask from '../InputTask/InputTask';
// import Done from './Done';

import Task from '../Task/Task';

const Tasks = () => {
    const [todo, setTodo] = useState(''); 
    const [todoList, setTodoList] = useState([])
    const [completedTodoList, setCompletedTodoList] = useState([])


    const handleDelete = (key) => {
        let currentList = [...todoList]
        const newTodoList = currentList.filter(task => task.id !== key)
        setTodoList(newTodoList)
    }

    const handleComplete = (key) => {
        let currentTodoList = [...todoList]
        const newTodoList = currentTodoList.filter(task => task.id !== key)
        const newCompletedTodo = currentTodoList.filter(task => task.id === key);
        setCompletedTodoList([
            ...completedTodoList, ...newCompletedTodo
        ])
        setTodoList(newTodoList);
    }

    const handleRedo = (key) => {
        let currentCompletedTodoList = [...completedTodoList]
        const newCompletedTodoList = currentCompletedTodoList.filter(task => task.id !== key)
        const newTodo = currentCompletedTodoList.filter(task => task.id === key);
        setTodoList([
            ...todoList, ...newTodo
        ])
        setCompletedTodoList(newCompletedTodoList);
    }

    // const handleUpdate = (index) => {
    //     setIsUpdate(true)
    //     SelectedTask(index)
    // }
    // const taskUpdater = (event) => {
    //     let newTask = [...todoList]
    //     newTask[selectedTask] = event.target.value;
    //     setTodoList(newTask);
    // }

     
    
    return (
        <div>
            
            <InputTask todo = {todo} setTodo = {setTodo} todoList = {todoList} setTodoList = {setTodoList}/>
            
            {
                todoList.map((task) => 
                    <Task
                        deleteHandler = {() => handleDelete(task.id)}  
                        completeHandler = {() => {handleComplete(task.id)}}
                        name = {task.name} key = {task.id} id = {task.id}
                        todoList = {todoList}
                        setTodoList = {setTodoList}
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
            {/* {
                isUpdate ? (
                    <div>
                        <input onChange  = {(event) => taskUpdater(event)} type="text" />
                        <button onClick = {() => setIsUpdate(false)}>update done</button>
                    </div>
                
                ): null
            } */}
            
        </div>
    );
};

export default Tasks;