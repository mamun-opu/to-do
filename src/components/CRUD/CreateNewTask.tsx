import { useContext, useState } from "react";
import { ITodo, TaskContext } from "../../App";
import NewTaskInput from "./NewTaskInput";
import { addNewTask } from "./operations";

export interface ITask {
  name: string;
  category: string;
}
export interface ICreateNewTask {
  categoryName: string;
}

const CreateNewTask = ({ categoryName }: ICreateNewTask) => {
  const { errorMessage, setErrorMessage, todoList, setTodoList } = useContext(TaskContext);
  const [todo, setTodo] = useState<ITask>({
    name: "",
    category: categoryName,
  });

  const createNewTask = (e: any ) => {
    e.preventDefault();
    if (!addNewTask) {
      return;
    }
    if(!setErrorMessage) return;
    if(!todoList) return;
    if(!setTodoList) return;
    addNewTask(todo, setErrorMessage, todoList, setTodoList);

    // setTodo({name: '', category: ''}) 
    setTodo({
      ...todo,
      name: "",
    });
  };

  return (
    <div>
      <span style={{ fontWeight: "bold", fontSize: "larger", color: "maroon" }}>
        {errorMessage}
      </span>

      <NewTaskInput
        categoryName={categoryName}
        todo={todo}
        setTodo={setTodo}
        buttonInputValue="add"
        handleSubmit={createNewTask}
      />
    </div>
  );
};

export default CreateNewTask;
