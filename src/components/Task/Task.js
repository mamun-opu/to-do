import React from 'react';

const Task = ({name, updateHandler, deleteHandler, completeHandler}) => {
    
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3>{name}</h3>
            <div style = {{marginLeft: '10px'}}>
                <button onClick = {updateHandler}>update</button>
                <button onClick = {deleteHandler}>delete</button>
                <button onClick = {completeHandler}>complete</button>
            </div>
        </div>
    );
};

export default Task;