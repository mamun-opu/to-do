import { useContext } from 'react';
import { TaskContext } from '../../App';


export interface ICompletedProps{
    name: string,
    id: string
}

const ShowCompletedTask = ({name, id}: ICompletedProps) => {

    const {redoTask} = useContext(TaskContext);
    
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <li>Well done, <span style = {{color: '#0069D9', fontSize: 'larger', fontWeight: 'bold'}}>{name}</span> is completed</li>
            <button style = {{marginLeft: '5px'}} onClick = {()=>redoTask && redoTask(id)}>Redo</button>
        </div>
    );
};

export default ShowCompletedTask;