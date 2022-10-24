import { faPenToSquare, faSquareCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ITodo, TaskContext } from "../../App";
import EditTask from "../CRUD/EditTask";
import { completeTask, deleteTask } from "../CRUD/operations";
import "./showSingleTask.css";

export interface IShowSingleTask {
  todo: ITodo;
  key: string;
  todoList: ITodo[];
  setTodoList: Function;
  setCount: Function;
}

const ShowSingleTask = ({ todo, key, todoList, setTodoList, setCount }: IShowSingleTask) => {
  const [newInput, setNewInput] = useState("");
  const [display, setDisplay] = useState(true);
  // const { todoList, setTodoList, setCount } = useContext(TaskContext);


  const switchOnEdit = () => {
    setDisplay(false);
    setNewInput(todo.name);
  };

  const switchOffEdit = () => {
    setNewInput("");
    setDisplay(true);
  };

  return (
    <div>
      <button
        className={
          "taskDisplay outline" +
          (display ? "flex" : "display-none")
        }
      >
        <Link className="" to={"/task/" + todo.id}>
          {todo.name}
        </Link>

        <div style={{ marginLeft: "10px" }} className = "flex">
          
          <FontAwesomeIcon icon={faPenToSquare} onClick={switchOnEdit} />
          <FontAwesomeIcon icon={faXmark} onClick={() => deleteTask(todo.id, todoList, setTodoList)} />
          <FontAwesomeIcon icon={faSquareCheck} onClick={() =>
              completeTask(todo.id, todoList , setCount, setTodoList)
            } />
          
          
        </div>
      </button>

      {display === false ? (
        <div style={{ display: "flex" }}>
          <EditTask
            id={todo.id}
            setDisplay={setDisplay}
            category={todo.category}
            newInput={newInput}
            setNewInput={setNewInput}
          />
          <input
            style={{ marginTop: "6px" }}
            type="button"
            value="cancel edit"
            onClick={switchOffEdit}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShowSingleTask;
