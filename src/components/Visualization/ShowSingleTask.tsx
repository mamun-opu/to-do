import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ITodo, TaskContext} from '../../App';
import EditTask from '../CRUD/EditTask';
import './showSingleTask.css';


export interface IShowSingleTask{
  taskNumber: number;
  todo: ITodo;
}

const ShowSingleTask = ({ taskNumber, todo }: IShowSingleTask) => {

  const [newInput, setNewInput] = useState('');
  const [display, setDisplay] = useState(true);
  const { deleteTask, completeTask } = useContext(TaskContext)


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
                <button onClick={() => deleteTask && deleteTask(todo.id)}>delete</button>
                <button onClick={() => completeTask && completeTask(todo.id)}>complete</button>
            </div>
        </div>
        <div className = {(display ? 'display-none' : 'display-flex')}>
            <EditTask setDisplay={setDisplay} id = {todo.id} newInput = {newInput} setNewInput = {setNewInput}/>
            <form action="">
              <div style={{marginTop: '3px'}}>
                <input type="button" value="cancel edit" onClick = {switchOffEdit}/> 
              </div>
            </form>
        </div>
    </div>
  )
}

export default ShowSingleTask;
