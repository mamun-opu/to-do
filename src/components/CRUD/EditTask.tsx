import { useContext } from 'react';
import { TaskContext } from '../../App';
import TextInput from './TextInput';

export interface IEditTask {
    id: string;
    newInput: string;
    setNewInput:(val: any)=>void;
    setDisplay: (val: boolean)=>void; 
}

const EditTask = ({id, setDisplay, newInput, setNewInput}: IEditTask) => {

    const{editTask} = useContext(TaskContext);

    const EditTaskName = (e: any) => {
        e.preventDefault();
        
        if(!editTask){
            return;
        }
        editTask(newInput,id);
        setNewInput('');
        setDisplay(true);
    }

    return (
        
        <TextInput name= {newInput} 
            setName = {setNewInput} 
            handleSubmit={EditTaskName}
            buttonInputValue = "edit done"
        />
    );
};

export default EditTask;