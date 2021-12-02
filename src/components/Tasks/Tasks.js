import React, { useState } from 'react';
import InputTask from '../InputTask/InputTask';
// import Done from './Done';

import Task from '../Task/Task';

const Tasks = () => {
    const [todo, setTodo] = useState(''); 
    const [todoList, setTodoList] = useState([])
    const [completedTodo, setCompletedTodo] = useState([])


    
    // const [isUnique, setIsUnique] = useState(false);
    // const [isUpdate, setIsUpdate] = useState(false);
    // const [selectedTask, SelectedTask] = useState(-1)


    // const handleTodoChange = (event) => {
    //     setTodo(event.target.value)
    // } 

    // const handleUpdateTodoList = (event) => {
    //     setTodo('');
    //     let isUnique = false;
    //     let myTasks = todoList.filter(task => task);
    //     console.log(myTasks.length)
    
    //     if(myTasks.length <= 0){
    //         isUnique = true;
    //     }else{
    //         isUnique = myTasks.some(task => {
    //             console.log('....hello......')
    //             console.log(todo, task.value)
    //             console.log(todo !== task.value)
    //             return todo !== task.value
    //         })
    //         console.log(isUnique)
    //     }
    //     if(isUnique === true){
    //         console.log(isUnique)
    //         let newTask =  {
    //             value: todo,
    //             id: todoList.length
    //         }
    //         myTasks.push(newTask);
    //         setTodoList(myTasks);
    //         setErrorMessage('');
    //         isUnique = false;
    //         console.log(isUnique)
    //     }else{
    //         console.log('errrrrrrrrrr')
    //         setErrorMessage('this task is already in the list')
    //     }
        
    //     console.log(todo)
        
    //     console.log(todoList)
    //     event.preventDefault();
    // }


    

    const handleDelete = (key) => {
        let currentList = [...todoList]
        const newTodoList = currentList.filter(task => task.id !== key)
        setTodoList(newTodoList)
    }

    const handleComplete = (key) => {
        let currentTodoList = [...todoList]
        const newTodoList = currentTodoList.filter(task => task.id === key)
        const newcompletedTodo = currentTodoList.filter(task => task.id === key);
        let completedList = [...completedTodo]
        completedList.push(newcompletedTodo)
        setCompletedTodo(completedList)
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
            
            <InputTask todo = {todo} setTodo = {setTodo} todoList = {todoList} setTodoList = {setTodoList}/>
            
            {
                todoList.map((task) => 
                    <Task
                        deleteHandler = {() => handleDelete(task.id)}  
                        completeHandler = {() => {handleComplete(task.id)}}
                        updateHandler = {() => {handleUpdate(task.id)}}
                        name = {task.name} key = {task.id} 
                    />)
            }
            {/* {
                completedTodo.length <= 0 ? <h2>No task has done yet</h2> : <h2> Congratulations</h2>
            } */}
            {/* {
                completedTodo.map((task, index) => <Done key = {index + Math.random()*(10 - 1) + 1} name = {task}/>) 
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