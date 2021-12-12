import React, { useContext } from 'react';
import { TaskContext } from '../../App';
import Form from '../Form/Form';

export interface IEditTask {
    id: string;
    newInput: string;
    setNewInput:(val: any)=>void;
    setDisplay: (val: boolean)=>void; 
}

const EditTask = ({id, setDisplay, newInput, setNewInput}: IEditTask) => {

    const{addNewTask} = useContext(TaskContext);

    const EditTaskName = (e: any) => {
        e.preventDefault();
        
        if(!addNewTask){
            return;
        }
        addNewTask(newInput, id);
        setNewInput('');
        setDisplay(true);
    }

    return (
        
    <Form todo= {newInput} 
        setTodo = {setNewInput} 
        handleSubmit={EditTaskName}
        buttonInputValue = "edit done"
    />
    );
};

export default EditTask;