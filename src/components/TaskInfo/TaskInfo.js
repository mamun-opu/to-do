import React from 'react';
import { useParams } from 'react-router';

const TaskInfo = () => {
    const {taskId} = useParams();
    console.log(taskId)

    return (
        <div>
            <h1>This is task Info {taskId}</h1>
        </div>
    );
};

export default TaskInfo;