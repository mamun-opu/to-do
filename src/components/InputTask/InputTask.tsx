import { useContext, useState } from 'react';
import { TaskContext } from '../../App';
import Form from '../Form/Form';


const InputTask = () => {
    const { addNewTask, errorMessage} = useContext(TaskContext)
    const [todo, setTodo] = useState(''); 


    const createNewTask = (e: any) => {

        e.preventDefault();

        if(!addNewTask){
            return;
        }
        addNewTask(todo)
        setTodo('')
        
      }

    
    return (
        <div>
            <span style = {{fontWeight: 'bold', fontSize: 'larger', color: 'maroon'}}>{errorMessage}</span>

            <Form todo = {todo} setTodo={setTodo} buttonInputValue='add' handleSubmit={createNewTask}/>
        </div>
    )
}

export default InputTask
