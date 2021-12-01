import React, { useState } from 'react';
import InputTask from '../InputTask/InputTask';
import Done from './Done';
import Task from './Task';

const Tasks = () => {
    const [todo, setTodo] = useState(''); 
    const [todoList, setTodoList] = useState([])
    const [completedTask, setCompletedTask] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [isUnique, setIsUnique] = useState(false);
    // const [isUpdate, setIsUpdate] = useState(false);
    // const [selectedTask, SelectedTask] = useState(-1)


    const handleTodoChange = (event) => {
        setTodo(event.target.value)
    } 

    const handleUpdateTodoList = (event) => {
        let myTasks = todoList.filter(task => task);

        setIsUnique(myTasks.map(task => {
            console.log('....hello......')
            console.log(todo, task.value)
            console.log(todo !== task.value)
            return todo !== task.value
        }))

        

        if(isUnique === true){
            let newTask =  {
                value: todo,
                id: todoList.length
            }
            myTasks.push(newTask);
            setTodoList(myTasks);
            setErrorMessage('')
        }else{
            setErrorMessage('this task is already in the list')
        }
        
        console.log(todoList)
        event.preventDefault();
    }


    

    const handleDelete = (key) => {
        let currentList = [...todoList]
        const newTodoList = currentList.filter(task => task.id !== key)
        setTodoList(newTodoList)
    }

    const handleComplete = (key) => {
        let currentTodoList = [...todoList]
        const newTodoList = currentTodoList.filter(task => task.id === key)
        const newCompletedTask = currentTodoList.filter(task => task.id === key);
        let completedList = [...completedTask]
        completedList.push(newCompletedTask)
        setCompletedTask(completedList)
        setTodoList(newTodoList);
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

    const handleUpdate = () => {

    }
     
    
    return (
        <div>
            
            <InputTask errorMessage = {errorMessage} handleChange = {handleTodoChange} handleSubmit = {handleUpdateTodoList} value = {todo}/>
            
            {
                todoList.map((task) => 
                    <Task 
                        deleteHandler = {() => handleDelete(task.id)}  
                        completeHandler = {() => {handleComplete(task.id)}}
                        updateHandler = {() => {handleUpdate(task.id)}}
                        name = {task.value} key = {task.id} 
                    />)
            }
            {/* {
                completedTask.length <= 0 ? <h2>No task has done yet</h2> : <h2> Congratulations</h2>
            } */}
            {/* {
                completedTask.map((task, index) => <Done key = {index + Math.random()*(10 - 1) + 1} name = {task}/>) 
            } */}
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