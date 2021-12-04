import React, { useState } from 'react'
import './Tasks.css'

const Task = ({ name, todoList,setTodoList, deleteHandler, completeHandler, id }) => {
  const [newInput, setNewInput] = useState(''); //to grab the input value from onChange 
  const [display, setDisplay] = useState(true); //to switch which one to see on display, task or input
  const [taskToEdit, setTaskToEdit] = useState({}); //to store the selected task to be edited
  
//grabbing the input value from onChange 
  const handleChange = (e) => {
    setNewInput(e.target.value)
  }

//Handling the editing task after submitting the input
  const handleSubmit = (event) => {
    let newTaskList = [...todoList];

    const editedList = newTaskList.map(todo => {
        if(todo.id === taskToEdit.id){
            todo.name = newInput
        }
        return todo;
    })
    setTodoList(editedList);
    setDisplay(true)
    event.preventDefault();
  }

//Selecting the task to be edited
  const handleSelectTask = (key) => {
    setNewInput(name)
    setDisplay(false)
    let newTaskList = [...todoList];
    const selectedTask = newTaskList.filter(task => task.id === key);
    setTaskToEdit(...selectedTask);
  }

  const handleCancelEdit = ()=> {
    setTaskToEdit({});
    setNewInput('');
    setDisplay(true);
  }

  return (
    <div>
        <div className =  {'taskDisplay ' + (display ? 'display-flex': 'display-none')}>
            <h3 style={{ color: 'tomato' }}>{name}</h3>

            <div style={{ marginLeft: '10px' }}>
                <button onClick={() => handleSelectTask(id)}>update</button>
                <button onClick={deleteHandler}>delete</button>
                <button onClick={completeHandler}>complete</button>
            </div>
        </div>
        <form className = {(display ? 'display-none' : 'display-block')} onSubmit={handleSubmit}>
            <label>
                <span style = {{fontSize: 'larger', fontWeight: 'bold', marginRight: '15px'}}>edit here:</span>
                <input type="text" value={newInput} onChange={handleChange} />
            </label>
            <input type="submit" value="edit done"/>
            <input type="button" value="cancel edit" onClick = {handleCancelEdit}/>
        </form>
    </div>
  )
}

export default Task
