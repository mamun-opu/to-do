import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { TaskContext } from "../../App";
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
  const { errorMessage, setErrorMessage, todoList, setTodoList } =
    useContext(TaskContext);
  const [isAddTask, setIsAddTask] = useState(false);
  const [todo, setTodo] = useState<ITask>({
    name: "",
    category: categoryName,
  });

  const createNewTask = (e: any) => {
    e.preventDefault();
    if (!addNewTask || !setErrorMessage || !todoList || !setTodoList) {
      return;
    }
    // setTodo({
    //   ...todo,
    //   // eslint-disable-next-line no-useless-computed-key
    //   ["name"]: todoName,
    // });
    addNewTask(todo, setErrorMessage, todoList, setTodoList);

    // setTodo({name: '', category: ''})
    setTodo({
      ...todo,
      name: "",
    });
    setIsAddTask(false);
  };

  return (
    <div className="w-96 max-w-xs mt-8">
      {!isAddTask ? (
        <button
          onClick={() => setIsAddTask(true)}
          className="btn w-96 btn-block"
        >
          <FontAwesomeIcon icon={faListCheck} />
          <span className="ml-3">Add new Task</span>{" "}
        </button>
      ) : (
        <NewTaskInput
          setIsAddTask={setIsAddTask}
          categoryName={categoryName}
          todo={todo}
          setTodo={setTodo}
          buttonInputValue="add"
          handleSubmit={createNewTask}
        />
      )}
    </div>
  );
};

export default CreateNewTask;
