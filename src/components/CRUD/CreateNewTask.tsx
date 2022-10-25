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
    if (!addNewTask) {
      return;
    }
    if (!setErrorMessage) return;
    if (!todoList) return;
    if (!setTodoList) return;
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
      {/* <span style={{ fontWeight: "bold", fontSize: "larger", color: "maroon" }}>
        {errorMessage}
      </span> */}
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
          categoryName={categoryName}
          todo={todo}
          setTodo={setTodo}
          buttonInputValue="add"
          handleSubmit={createNewTask}
        />
      )}
    </div>
    //   <div className="w-96 max-w-xs mt-8">
    //   {!isAddList ? (
    //     <button onClick={() => setIsAddList(true)} className="btn btn-block">
    //       <FontAwesomeIcon icon={faLayerGroup} />
    //       <span className="ml-3">Add new Category</span>
    //     </button>
    //   ) : (
    //     <TextInput
    //       name={categoryName}
    //       setName={setCategoryName}
    //       buttonInputValue="add category"
    //       handleSubmit={createNewCategory}
    //       isAddList = {isAddList}
    //       setIsAddList = {setIsAddList}
    //     />
    //   )}
    // </div>
  );
};

export default CreateNewTask;
