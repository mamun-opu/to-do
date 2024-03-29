import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../App";

const ShowCompletedTask = () => {
  const { todoList, categoryList } = useContext(TaskContext);
  const result = todoList?.filter((todo) => todo.isCompleted === true).length;
  const [selecetedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="h-screen w-screen pt-20 pb-20 bg-zinc-800">
      <div className="flex justify-end mb-8 mr-8">
        <Link className="text-teal-400" to={"/"}>
          /show all task
        </Link>
      </div>
      <div className="rounded h-full w-5/6 mx-auto overflow-x-auto overflow-y-scroll bg-stone-300 flex items-center flex-col justify-start">
        <button className="btn btn-block uppercase w-56 md:w-64 lg:w-80 m-8">
          completed task: {result}
        </button>
        {result && result > 0 ? (
          <table className="table mb-8 w-56 md:w-64 lg:w-80">
            <thead>
              <tr>
                <th>Name</th>
                <th>
                  <select
                    value={selecetedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="select select-accent w-full max-w-xs"
                  >
                    <option value={"all"}>All Category</option>
                    {categoryList?.map((category, index) => (
                      <option key={`${Math.floor(Math.random() * 1001)} + ${index}`} value={category}>{category}</option>
                    ))}
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              {selecetedCategory === "all"
                ? todoList?.map((todo) => {
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
                  })
                : todoList?.map((todo) => {
                  return (
                    todo.isCompleted && todo.category === selecetedCategory && (
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ShowCompletedTask;
