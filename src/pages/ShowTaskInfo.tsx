import { useContext } from 'react';
import { useParams } from 'react-router';
import { TaskContext } from '../App';


const ShowTaskInfo = () => {

    const {taskId} = useParams();
    const {todoList} = useContext(TaskContext);
    const todo = todoList?.find(todo => {
        return (todo.id === taskId)
    })



    return (
        <div>
            <h1>This is task INFO </h1>
            <hr style = {{width: '20%', height: '3px', border: 'solid 1px white', borderRadius: '5px', backgroundImage: 'linear-gradient(to right, #a58cbd, #b7b7de, #00d4ff)'}}/>
            <h3>Task name: <span style = {{color: 'blue', fontSize: 'larger', fontWeight: 'bolder'}}>{todo?.name}</span></h3>
            <h4>Task ID: <span style = {{color: 'maroon', fontWeight: 'bolder'}}>{todo?.id}</span></h4>
        </div>
    );
};

export default ShowTaskInfo;