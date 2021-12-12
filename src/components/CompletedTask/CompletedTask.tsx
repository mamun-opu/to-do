import React, { useContext } from 'react';
import { TaskContext } from '../../App';
import './CompletedTask.css';

export interface ICompletedProps{
    name: string,
    id: string
}

const CompletedTask = ({name, id}: ICompletedProps) => {

    const {handleRedo} = useContext(TaskContext);
    
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <li>Well done, <span style = {{color: '#0069D9', fontSize: 'larger', fontWeight: 'bold'}}>{name}</span> is completed</li>
            <button style = {{marginLeft: '5px'}} onClick = {()=>handleRedo && handleRedo(id)}>Redo</button>
        </div>
    );
};

export default CompletedTask;