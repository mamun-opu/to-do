import React from 'react';

const Task = (props) => {
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3>{props.name}</h3>
            <div style = {{marginLeft: '10px'}}>
                <button onClick = {props.updateHandler}>update</button>
                <button onClick = {props.deleteHandler}>delete</button>
                <button onClick = {props.completeHandler}>complete</button>
            </div>
        </div>
    );
};

export default Task;