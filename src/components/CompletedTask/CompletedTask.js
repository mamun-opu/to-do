import React from 'react';
import './CompletedTask.css'

const CompletedTask = ({name, redoHandler}) => {
    
    return (
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <li>Well done, <span style = {{color: '#0069D9', fontSize: 'larger', fontWeight: 'bold'}}>{name}</span> is completed</li>
            <button style = {{marginLeft: '5px'}} onClick = {redoHandler}>Redo</button>
        </div>
    );
};

export default CompletedTask;