import { useContext, useState } from 'react';
import { TaskContext } from '../../App';

export interface IInputProps{
    id?: string;
    setDisplay?:(value: boolean)=>void;
    taskInputValue?: string;
    buttonInputValue: string;
  }

const InputTask = ({id, taskInputValue, buttonInputValue, setDisplay}: IInputProps) => {
    const { addNewTask, errorMessage} = useContext(TaskContext)
    const [todo, setTodo] = useState(''); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e: any) => {

        e.preventDefault();
        if(setDisplay){
            console.log('setdisplay')
            setDisplay(true);
        }
        if(!addNewTask){
            return;
        }
        addNewTask(todo, id)
        setTodo('')
        
      }
    // const EditTask = (e: any) => {
        
    //     e.preventDefault();
    //     if(addNewTask){
    //         addNewTask(todo, id)
    //     }
    //     setTodo('')
        
    // }
    
    return (
        <div>
            <span style = {{fontWeight: 'bold', fontSize: 'larger', color: 'maroon'}}>{errorMessage}</span>
            <form style = {{marginTop: '10px'}} onSubmit={handleSubmit}>
                <label>
                <span style = {{fontSize: 'larger', fontWeight: 'bold', marginRight: '15px'}}>Name:</span>
                <input
                    type="text"
                    value={todo}
                    onChange={handleChange}
                />
                </label>
                <input type="submit" onClick={handleSubmit} value={buttonInputValue} />
            </form>
        </div>
    )
}

export default InputTask
