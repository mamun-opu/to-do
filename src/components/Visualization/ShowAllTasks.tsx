import { useContext } from "react";
import { TaskContext } from "../../App";
import ShowSingleTask from "./ShowSingleTask";
import CreateNewTask from "../CRUD/CreateNewTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { deleteCategory } from "../CRUD/operations";

const ShowAllTasks = () => {
  const { todoList, categoryList, setCategoryList, setTodoList, setCount } =
    useContext(TaskContext);

  

  return (
    <div>
      <div className="flex">
        {categoryList?.map((category) => {
          return (
            <div className="m-4 md:m-8 p-3 border border-sky-500 h-fit w-56 md:w-64 lg:w-80">
              <button className="btn btn-sm md:btn-md no-animation btn-block flex justify-between cursor-default">
                <div>{category}</div>
                <FontAwesomeIcon
                  className="mx-1 hover:cursor-pointer w-6 h-6"
                  icon={faXmark}
                  onClick = {() => todoList && setTodoList && setCategoryList && deleteCategory(category, todoList, setTodoList, categoryList, setCategoryList)}
                />
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
