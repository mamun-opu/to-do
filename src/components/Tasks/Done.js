import React from 'react';

const Done = (props) => {
    const name = props.name;
    
    return (
        <div>
            <li>Well done, {name} is completed</li>
        </div>
    );
};

export default Done;