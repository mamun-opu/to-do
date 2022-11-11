import { useContext } from "react";
import { TaskContext } from "../../App";
import ShowSingleTask from "./ShowSingleTask";
import CreateNewTask from "../CRUD/CreateNewTask";

const ShowAllTasks = () => {
  const { todoList, categoryList, setTodoList, setCount } =
    useContext(TaskContext);

  return (
    <div>
      <div className="flex">
        {categoryList?.map((category) => {
          return (
            <div className="m-8 p-3 border border-sky-500 h-fit w-56 md:w-64 lg:w-80">
              <button className="btn btn btn-sm md:btn-md btn-block">
                {category}
              </button>
              <div className="divider">X</div>
              {todoList && setTodoList && setCount
                ? todoList.map((todo) => {
                    return (
                      todo.category === category && (
                        <ShowSingleTask
                          todo={todo}
                          todoList={todoList}
                          setTodoList={setTodoList}
                          setCount={setCount}
                          key={todo.id}
                        />
                      )
                    );
                  })
                : ""}
              <CreateNewTask categoryName={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowAllTasks;
