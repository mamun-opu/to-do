import { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../App";

const ShowCompletedTask = () => {
  const { todoList, count } = useContext(TaskContext);
  return (
    <div className="h-screen w-screen pt-20 pb-20 bg-zinc-800">
      <div className="flex justify-end mb-8 mr-8">
        <Link className="text-teal-400" to={"/"}>
          /Home page
        </Link>
      </div>
      <div className="rounded h-full w-5/6 mx-auto overflow-x-auto overflow-y-scroll bg-stone-300 flex items-center flex-col justify-start">
        <button className="btn btn-block uppercase w-80 m-8">
          completed task: {count}
        </button>
        <table className="table w-80">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {todoList?.map((todo) => {
              return (
                todo.isCompleted && (
                  <>
                    <tr>
                      <td>{todo.name}</td>
                      <td>{todo.category}</td>
                    </tr>
                  </>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowCompletedTask;
