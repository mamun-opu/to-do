import React from 'react';

const CompletedTask = ({name, redoHandler}) => {
    
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <li>Well done, {name} is completed</li>
            <button style = {{marginLeft: '5px'}} onClick = {redoHandler}>Redo</button>
        </div>
    );
};

export default CompletedTask;