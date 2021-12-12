import React from 'react';
export interface IForm {
    todo: string;
    setTodo:(value: string) => void;
    buttonInputValue: string;
    handleSubmit:(value: any)=>void;
  }
const Form = ({ todo, setTodo, handleSubmit, buttonInputValue }: IForm) => {
    return (
        <form style = {{marginTop: '10px'}} onSubmit={handleSubmit}>
            <label>
            <span style = {{fontSize: 'larger', fontWeight: 'bold', marginRight: '15px'}}>Name:</span>
            <input
                type="text"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            </label>
            <input type="submit" value={buttonInputValue} />
        </form>
    );
};

export default Form;