import { useContext } from 'react';
import { TaskContext } from '../../App';


export interface ICompletedProps{
    name: string,
    id: string,
    taskNumber: number
}

const ShowCompletedTask = ({name, id, taskNumber}: ICompletedProps) => {

    const {redoTask} = useContext(TaskContext);
    
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3 style={{color: 'tomato', textDecoration: 'line-through'}}>{taskNumber+1}. {name}</h3>
            <button style = {{marginLeft: '5px'}} onClick = {()=>redoTask && redoTask(id)}>Redo</button>
        </div>
    );
};

export default ShowCompletedTask;