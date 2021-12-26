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
        // if(todo.category === ''){
        //     setTodo((preValue: ITask) => {
        //         const props = 'category';
        //         console.log('ssssssssss')
        //         return{
        //             ...preValue,[props] : 'a'
        //         }
        //     });
        //     addNewTask(todo)
        //     setTodo({name: '', category: ''})
        //     return;
        // }
        addNewTask(todo)
        
        setTodo({name: '', category: ''})
    }

    
    return (
        <div>
            <span style = {{fontWeight: 'bold', fontSize: 'larger', color: 'maroon'}}>{errorMessage}</span>

            <NewTaskInput todo = {todo} setTodo={setTodo} buttonInputValue='add' handleSubmit={createNewTask}/>
        </div>
    )
}

export default CreateNewTask;
