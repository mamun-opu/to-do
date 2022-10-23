import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ITodo, TaskContext } from "../../App";
import EditTask from "../CRUD/EditTask";
import { completeTask, deleteTask } from "../CRUD/operations";
import "./showSingleTask.css";

export interface IShowSingleTask {
  todo: ITodo;
  key: string;
}

const ShowSingleTask = ({ todo, key }: IShowSingleTask) => {
  const [newInput, setNewInput] = useState("");
  const [display, setDisplay] = useState(true);
  const { todoList, setTodoList, setCount } = useContext(TaskContext);

  if (!todoList || !setTodoList || !setCount) return;

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
      <div
        className={
          "taskDisplay w-[292px] max-w-[292px]" +
          (display ? "display-flex" : "display-none")
        }
      >
        <Link className="btn btn-accent btn-block" to={"/task/" + todo.id}>
          {todo.name}
        </Link>

        <div style={{ marginLeft: "10px" }}>
          <button onClick={switchOnEdit}>update</button>
          <button onClick={() => deleteTask(todo.id, todoList, setTodoList)}>
            delete
          </button>
          <button
            onClick={() =>
              completeTask(todo.id, todoList, setCount, setTodoList)
            }
          >
            complete
          </button>
        </div>
      </div>

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
