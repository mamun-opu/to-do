import { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { TaskContext } from "../App";

const ShowTaskInfo = () => {
  const { taskId } = useParams();
  const { todoList } = useContext(TaskContext);
  const todo = todoList?.find((todo) => {
    return todo.id === taskId;
  });

  return (
    <div className="h-screen w-screen pt-20 pb-20 bg-zinc-800 flex items-center justify-center">
      <div className="card w-56 md:w-64 lg:w-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-accent uppercase">{todo?.name}</h2>
          <p>Category: {todo?.category}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTaskInfo;
