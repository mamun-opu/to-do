import React, { useState } from 'react';
import Done from './Done';
import Task from './Task';

const Tasks = () => {

    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])
    const [completedTask, setCompletedTask] = useState([])
    const [isUpdate, setIsUpdate] = useState(false);
    const [indx, setIndx] = useState(-1)

    const handleAddTask = () => {
        let newTask = todoList.slice();
        newTask.push(todo);
        setTodoList(newTask)
    }

    const handleDelete = (index) => {
        let newTask = [...todoList]
        newTask.splice(index, 1)
        setTodoList(newTask)
    }

    const handleComplete = (index) => {
        let newTask = [...todoList]
        let newCompTask = newTask.splice(index, 1)
        let compTask = [...completedTask]

        compTask.push(newCompTask)
        setCompletedTask(compTask)
        setTodoList(newTask);
    }

    const handleUpdate = (index) => {
        setIsUpdate(true)
        setIndx(index)
    }
    const taskUpdater = (event) => {
        let newTask = [...todoList]
        newTask[indx] = event.target.value;
        setTodoList(newTask);
        
    }
     
    
    return (
        <div>
            <h2>To-Do List</h2> 
            <input type="text" onChange = {(event) => setTodo(event.target.value)} />
            <input type="button" value = 'add' onClick = {handleAddTask} />
            
            {
                todoList.map((task, index) => 
                    <Task 
                        deleteHandler = {() => handleDelete(index)}  
                        completeHandler = {() => {handleComplete(index)}} 
                        updateHandler = {() => {handleUpdate(index)}}
                        name = {task} key = {index} 
                    />)
            }
            {
                completedTask.length <= 0 ? <h2>No task has done yet</h2> : <h2> Congratulations</h2>
            }
            {
                completedTask.map((task, index) => <Done key = {index + Math.random()*(10 - 1) + 1} name = {task}/>) 
            }
            {
                isUpdate ? (
                    <div>
                        <input onChange  = {(event) => taskUpdater(event)} type="text" />
                        <button onClick = {() => setIsUpdate(false)}>update done</button>
                    </div>
                
                ): null
            }
            
        </div>
    );
};

export default Tasks;