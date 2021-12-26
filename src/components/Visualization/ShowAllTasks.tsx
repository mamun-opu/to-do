import { useContext} from 'react';
import { TaskContext } from '../../App';
import ShowCompletedTask from './ShowCompletedTask';
import ShowSingleTask from './ShowSingleTask';
import './showAllTasks.css';



const ShowAllTasks = () => {
    
    const { todoList, categoryList, count } = useContext(TaskContext);
    const categoryOne = categoryList?categoryList[0]:'';
    const categoryTwo = categoryList?categoryList[1]:'';
    const categoryThree = categoryList?categoryList[2]:'';
    
    
    
    return (
        <div>
            {
                count && count > 0 ? <h2>congratulations {count} task completed</h2> : <h2>no Task completed</h2>
            }
            <div className='categoryContainer' style={{display: 'flex', justifyContent: 'space-between', margin: '0 10%'}}>
                <div style={{marginLeft: '10px'}}>
                    <h2>{categoryOne}</h2>
                    {
                        todoList?.map((todo, index) => {
                            return(
                                <>
                                    {(todo.category === categoryOne && !todo.isCompleted)?
                                    <ShowSingleTask taskNumber = {index} todo = {todo} key={todo.id}/> : ''}
                                    {todo.category === categoryOne && todo?.isCompleted ? (
                                        <ShowCompletedTask
                                            taskNumber = {index}
                                            name = {todo.name}
                                            id = {todo.id}
                                            key = {todo.id}
                                        />
                                    ): ''}
                                </>

                            )
                        })
                    }
                </div>
                <div style={{marginLeft: '10px'}}>
                    <h2>{categoryTwo}</h2>
                    {
                        todoList?.map((todo, index) => {
                            return(
                                <>
                                    {(todo.category === categoryTwo && !todo.isCompleted)?
                                    <ShowSingleTask taskNumber = {index} todo = {todo} key={todo.id}/> : ''}
                                    {todo.category === categoryTwo && todo?.isCompleted ? (
                                        <ShowCompletedTask
                                            taskNumber = {index}
                                            name = {todo.name}
                                            id = {todo.id}
                                            key = {todo.id}
                                        />
                                    ): ''}
                                </>
                            )
                        })
                    }
                </div>
                <div style={{marginLeft: '10px'}}>
                    <h2>{categoryThree}</h2>
                    {
                        todoList?.map((todo, index) => {
                            return(
                                <>
                                    {(todo.category === categoryThree && !todo.isCompleted)?
                                    <ShowSingleTask taskNumber = {index} todo = {todo} key={todo.id}/> : ''}
                                    {todo.category === categoryThree && todo?.isCompleted ? (
                                        <ShowCompletedTask
                                            taskNumber = {index}
                                            name = {todo.name}
                                            id = {todo.id}
                                            key = {todo.id}
                                        />
                                    ): ''}
                                </>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}


export default ShowAllTasks;