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
    <div className="h-screen w-screen pt-20 pb-20 bg-zinc-800">
      <div className="hero min-h-full w-4/6 mx-auto">
        <div className="hero-overlay bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase text-teal-500">
              {todo?.name}
            </h1>
            <p className="mb-5 font-medium text-info">ID: {todo?.id}</p>
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
