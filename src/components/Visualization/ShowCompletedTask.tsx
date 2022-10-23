import { useContext } from 'react';
import { TaskContext } from '../../App';
import { redoTask } from '../CRUD/operations';


export interface ICompletedProps{
    name: string,
    id: string,
    taskNumber: number
}

const ShowCompletedTask = ({name, id, taskNumber}: ICompletedProps) => {

    const {todoList, setCount, setTodoList} = useContext(TaskContext);
    if(!todoList || !setCount || !setTodoList) return;
    
    
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3 style={{color: 'tomato', textDecoration: 'line-through'}}>{taskNumber+1}. {name}</h3>
            <button style = {{marginLeft: '5px'}} onClick = {()=> redoTask(id, todoList, setCount, setTodoList)}>Redo</button>
        </div>
    );
};

export default ShowCompletedTask;