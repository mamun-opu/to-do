import { useContext} from 'react';
import { TaskContext } from '../../App';
import CompletedTask from '../CompletedTask/CompletedTask';
import InputTask from '../InputTask/InputTask';
import Task from '../Task/Task';

const Tasks = () => {
    const { todoList } = useContext(TaskContext);
    
    
    return (
        <div>
            
            <InputTask />
            {
                todoList?.map((todo, index) => {
                    return(
                        !todo?.isCompleted ?
                            (
                                <Task taskNumber = {index} todo = {todo} key={todo.id}/>

                            ) : ''
                    )
                    
                })
            }
            {
                todoList?.some(todo => todo.isCompleted) ? <h2> Congratulations</h2> : <h2>No task has done yet</h2> 
            }
            {
                todoList?.map((todo: any) =>  {
                    return (
                        todo?.isCompleted ? (
                            <CompletedTask
                                name = {todo.name}
                                id = {todo.id}
                                key = {todo.id}
                            />
                        ): ''
                    )
                })
            }
        </div>
    )
}


export default Tasks;