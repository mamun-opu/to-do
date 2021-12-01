import React from 'react'

const InputTask = (props) => {
    
    return (
        <div>
            <form style = {{marginTop: '10px'}} onSubmit={props.handleSubmit}>
                <label>
                Name:
                <input
                    type="text"
                    value={props.todo}
                    onChange={props.handleChange}
                />
                </label>
                <input type="submit" value="add" />
            </form>
            {props.errorMessage}
        </div>
    )
}

export default InputTask
