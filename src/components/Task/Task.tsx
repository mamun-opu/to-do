import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ITodoList, TaskContext } from '../../App';
import './Tasks.css';
import { ITaskContext } from '../../App';

export interface ITaskProps{
  name: string;
  deleteHandler: () => void;
  completeHandler: () => void;
  id: string;
  taskNumber: number;
}

const Task = ({ name, deleteHandler, completeHandler, id, taskNumber }: ITaskProps) => {
  const {todoList, setTodoList} = useContext<ITaskContext>(TaskContext);
  const [newInput, setNewInput] = useState('');
  const [display, setDisplay] = useState(true);
  const [taskToEdit, setTaskToEdit] = useState<any>({});

  const handleChange = (e: any) => {
    setNewInput(e.target.value)
  }

  const handleSubmit = (event: any) => {
    if(newInput.length === 0){
      setTaskToEdit({});
      setNewInput('');
      setDisplay(true);
    }else{
      let newTaskList = [...todoList];

      const editedList: ITodoList[] = newTaskList.map(todo => {
          if(todo.id === taskToEdit.id){
              todo.name = newInput
          }
          return todo;
      })
      setTodoList(editedList);
      setDisplay(true)
    }
    
    event.preventDefault();
  }

  const handleSelectTask = (keyId: string) => {
    setNewInput(name)
    setDisplay(false)
    let newTaskList = [...todoList];
    const selectedTask = newTaskList.find(task => task.id === keyId);
    setTaskToEdit(selectedTask);
  }

  const handleCancelEdit = ()=> {
    setTaskToEdit({});
    setNewInput('');
    setDisplay(true);
  }

  return (
    <div>
        <div className =  {'taskDisplay ' + (display ? 'display-flex': 'display-none')}>
            <h3><Link style={{ color: 'tomato', textDecoration: 'none' }} to = {"/task/"+id}>{taskNumber+1}. {name}</Link></h3>

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
