import {
  faPenToSquare,
  faSquareCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ITodo } from "../../App";
import EditTask from "../CRUD/EditTask";
import { completeTask, deleteTask } from "../CRUD/operations";

export interface IShowSingleTask {
  todo: ITodo;
  key: string;
  todoList: ITodo[];
  setTodoList: Function;
  setCount: Function;
}

const ShowSingleTask = ({
  todo,
  todoList,
  setTodoList,
  setCount,
}: IShowSingleTask) => {
  const [newInput, setNewInput] = useState("");
  const [display, setDisplay] = useState(true);

  const switchOnEdit = () => {
    setDisplay(false);
    setNewInput(todo.name);
  };

  const switchOffEdit = () => {
    setNewInput("");
    setDisplay(true);
  };

  return (
    <div className="w-96">
      {display ? (
        <div
          className={
            "w-96 text-black flex flex-row justify-between items-center"
          }
        >
          <div className="flex font-medium">
            <Link to={"/task/" + todo.id}>{todo.name}</Link>
          </div>

          <div className="flex">
            <FontAwesomeIcon
              className="mx-1 hover:cursor-pointer"
              icon={faPenToSquare}
              onClick={switchOnEdit}
            />
            <FontAwesomeIcon
              className="mx-1 hover:cursor-pointer"
              icon={faXmark}
              onClick={() => deleteTask(todo.id, todoList, setTodoList)}
            />
            <FontAwesomeIcon
              className={
                `mx-1 hover:cursor-pointer` +
                (todo.isCompleted ? ` text-green-600` : ``)
              }
              icon={faSquareCheck}
              onClick={() =>
                completeTask(
                  todo.id,
                  todoList,
                  setCount,
                  setTodoList
                )
              }
            />
          </div>
        </div>
      ) : (
        <div>
          <EditTask
            id={todo.id}
            setDisplay={setDisplay}
            category={todo.category}
            newInput={newInput}
            setNewInput={setNewInput}
            switchOffEdit={switchOffEdit}
          />
        </div>
      )}
    </div>
  );
};

export default ShowSingleTask;
