import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ITodo, TaskContext} from '../../App';
import InputTask from '../InputTask/InputTask';
import './Tasks.css';


export interface ITaskProps{
  taskNumber: number;
  todo: ITodo
}

const Task = ({ taskNumber, todo }: ITaskProps) => {

  // const [newInput, setNewInput] = useState('');
  const [display, setDisplay] = useState(true);
  const { handleDelete, handleComplete, todoList } = useContext(TaskContext)
  // const [taskToEdit, setTaskToEdit] = useState<any>({});

  // const handleChange = (e: any) => {
  //   setNewInput(e.target.value)
  // }

  // const handleSubmit = (event: any) => {
  //   if(newInput.length === 0){
  //     setTaskToEdit({});
  //     setNewInput('');
  //     setDisplay(true);
  //   }else{
  //     let newTaskList = [...todoList];

  //     const editedList: ITodoList[] = newTaskList.map(todo => {
  //         if(todo.id === taskToEdit.id){
  //             todo.name = newInput
  //         }
  //         return todo;
  //     })
  //     setTodoList(editedList);
  //     setDisplay(true)
  //   }
    
  //   event.preventDefault();
  // }

  // const switchOnEdit = () => {
  //   // setNewInput(name)
  //   setDisplay(false)
  //   // let newTaskList = [...todoList];
  //   // const selectedTask = todoList?.find(task => task.id === keyId);
  //   // setTaskToEdit(selectedTask);
    
  // }

  // const handleCancelEdit = ()=> {
  //   // setTaskToEdit({});
  //   // setNewInput('');
  //   setDisplay(true);
  // }
  // useEffect(
  //   () => setDisplay(false),
  //   [<InputTask />]
  // );

  return (
    <div>
        <div className =  {'taskDisplay ' + (display ? 'display-flex': 'display-none')}>
            <h3><Link style={{ color: 'tomato', textDecoration: 'none' }} to = {"/task/"+todo.id}>{taskNumber+1}. {todo.name}</Link></h3>

            <div style={{ marginLeft: '10px' }}>
                <button onClick={()=>setDisplay(false)}>update</button>
                <button onClick={() => handleDelete && handleDelete(todo.id)}>delete</button>
                <button onClick={() => handleComplete && handleComplete(todo.id)}>complete</button>
            </div>
        </div>
        <div className = {(display ? 'display-none' : 'display-block')}>
            {/* <label>
                <span style = {{fontSize: 'larger', fontWeight: 'bold', marginRight: '15px'}}>edit here:</span>
                <input type="text" value={newInput} onChange={handleChange} />
            </label> */}
            <InputTask id = {todo.id} buttonInputValue = "edit done" setDisplay = {setDisplay} taskInputValue = {todo.name}/>
            <input type="button" value="cancel edit" onClick = {()=>setDisplay(true)}/>
        </div>
    </div>
  )
}

export default Task
