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
  const { setErrorMessage, todoList, setTodoList } = useContext(TaskContext);
  const [isAddTask, setIsAddTask] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [todo, setTodo] = useState<ITask>({
    name: "",
    category: categoryName,
  });

  const createNewTask = (e: any) => {
    e.preventDefault();
    setTodo({ ...todo, name: taskName });
    if (!addNewTask || !setErrorMessage || !todoList || !setTodoList) {
      return;
    }
    const added = addNewTask(todo, setErrorMessage, todoList, setTodoList);

    if (added) {
      setTodo({
        ...todo,
        name: "",
      });
      setTaskName("")
      setIsAddTask(false);
    }
  };
  // const handleCancel = () => {
  //   setIsAddTask && setIsAddTask(false);
  //   setTodo({
  //     ...todo,
  //     name: "",
  //   });
  //   setErrorMessage && setErrorMessage("");
  // };

  return (
    <div className="w-80 max-w-xs mt-8">
      {!isAddTask ? (
        <button onClick={() => setIsAddTask(true)} className="btn btn-block">
          <FontAwesomeIcon icon={faListCheck} />
          <span className="ml-3">Add new Task</span>{" "}
        </button>
      ) : (
        <NewTaskInput
          setIsAddTask={setIsAddTask}
          todo={todo}
          setTodo={setTodo}
          handleSubmit={createNewTask}
        />
        // <InputText
        //   name={taskName}
        //   setName={setTaskName}
        //   handleSubmit={createNewTask}
        //   handleCancel = {handleCancel}
        // />
      )}
    </div>
  );
};

export default CreateNewTask;
