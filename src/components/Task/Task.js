import React, { useState } from 'react'
import './Tasks.css'

const Task = ({ name, todoList,setTodoList, deleteHandler, completeHandler, id }) => {
  const [newInput, setNewInput] = useState('')
  const [display, setDisplay] = useState(true);
  const [taskToEdit, setTaskToEdit] = useState({});
  
 
  const handleChange = (e) => {
    setNewInput(e.target.value)
  }
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


  const handleEdit = (key) => {
    setNewInput(name)
    setDisplay(false)
    let newTaskList = [...todoList];
    const selectedTask = newTaskList.filter(task => task.id === key);
    setTaskToEdit(...selectedTask);
  }

  return (
    <div>
        <div className =  {'taskDisplay ' + (display ? 'display-flex': 'display-none')}>
            <h3 style={{ color: 'tomato' }}>{name}</h3>

            <div style={{ marginLeft: '10px' }}>
                <button onClick={() => handleEdit(id)}>update</button>
                <button onClick={deleteHandler}>delete</button>
                <button onClick={completeHandler}>complete</button>
            </div>
        </div>
        <form className = {(display ? 'display-none' : 'display-block')} onSubmit={handleSubmit}>
            <label>
                edit here :
                <input type="text" value={newInput} onChange={handleChange} />
            </label>
            <input type="submit" value="edit done"/>
        </form>
    </div>
  )
}

export default Task
