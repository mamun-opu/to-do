import { useContext } from "react";
import { TaskContext } from "../../App";
import { ITask } from "./CreateNewTask";

export interface INewTakInput {
    todo: ITask;
    setTodo:(val: any) => void;
    buttonInputValue: string;
    handleSubmit:(value: any)=>void;
  }
const NewTaskInput = ({ todo, setTodo, handleSubmit, buttonInputValue }: INewTakInput) => {

    const {categoryList} = useContext(TaskContext);
    const onChangeHandler = (event: any): void => {
        const value = event.target.value;
        const name = event.target.name;
        setTodo((preValue: ITask) => {

            return{
                ...preValue,
                [name]: value
            }
        });
       
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
            <span style = {{fontSize: 'larger', fontWeight: 'bold', marginRight: '15px'}}>Name:</span>
            </label>
            <input
                type="text"
                name="name"
                value={todo.name}
                placeholder="type here.."
                onChange={onChangeHandler}
            />
            
            <label>
            <select value={todo.category} name="category" onChange={onChangeHandler}>
                {
                    categoryList?.map((category) => 
                    <option key={category} value={category}>
                        {category}
                    </option>)
                }
                
            </select>
            </label>
            <button type="submit">{buttonInputValue}</button>
        </form>
    );
};

export default NewTaskInput;