import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ITodo, TaskContext} from '../../App';
import EditTask from '../EditTask/EditTask';
import './Tasks.css';


export interface ITaskProps{
  taskNumber: number;
  todo: ITodo
}

const Task = ({ taskNumber, todo }: ITaskProps) => {

  const [newInput, setNewInput] = useState('');
  const [display, setDisplay] = useState(true);
  const { handleDelete, handleComplete } = useContext(TaskContext)


  const switchOnEdit = () => {
    setDisplay(false) 
    setNewInput(todo.name)    
  }

  const switchOffEdit = ()=> {
    setNewInput('');
    setDisplay(true);
  }

  return (
    <div>
        <div className =  {'taskDisplay ' + (display ? 'display-flex': 'display-none')}>
            <h3><Link style={{ color: 'tomato', textDecoration: 'none' }} to = {"/task/"+todo.id}>{taskNumber+1}. {todo.name}</Link></h3>

            <div style={{ marginLeft: '10px' }}>
                <button onClick={switchOnEdit}>update</button>
                <button onClick={() => handleDelete && handleDelete(todo.id)}>delete</button>
                <button onClick={() => handleComplete && handleComplete(todo.id)}>complete</button>
            </div>
        </div>
        <div className = {(display ? 'display-none' : 'display-block')}>
            <EditTask setDisplay={setDisplay} id = {todo.id} newInput = {newInput} setNewInput = {setNewInput}/>
            <input type="button" value="cancel edit" onClick = {switchOffEdit}/> 
        </div>
    </div>
  )
}

export default Task
