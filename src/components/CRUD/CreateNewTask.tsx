import { useContext, useState } from 'react';
import { TaskContext } from '../../App';
import NewTaskInput from './NewTaskInput';

export interface ITask {
    name: string;
    category: string;
}

const CreateNewTask = () => {
    const { addNewTask, errorMessage } = useContext(TaskContext)
    const [todo, setTodo] = useState<ITask>({
        name: '',
        category: ''
    }); 


    const createNewTask = (e: any) => {
        
        e.preventDefault();
        if(!addNewTask){
            return;
        }
        
        addNewTask(todo)
        
        // setTodo({name: '', category: ''})
        setTodo(prevTodo => {
            return{
                ...todo, name: '', category: prevTodo.category
            }
            
        })
    }


    
    return (
        <div>
            <span style = {{fontWeight: 'bold', fontSize: 'larger', color: 'maroon'}}>{errorMessage}</span>

            <NewTaskInput todo = {todo} setTodo={setTodo} buttonInputValue='add' handleSubmit={createNewTask}/>
        </div>
    )
}

export default CreateNewTask;
