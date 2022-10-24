import { useContext } from "react";
import { TaskContext } from "../../App";
import ShowSingleTask from "./ShowSingleTask";
import "./showAllTasks.css";
import CreateNewTask from "../CRUD/CreateNewTask";

const ShowAllTasks = () => {
  const { todoList, categoryList, setTodoList, setCount } =
    useContext(TaskContext);

  return (
    <div>
      <div className="flex">
        {categoryList?.map((category) => {
          return (
            <div className="m-8 p-3 border border-sky-500">
              <button className="btn btn-block">{category}</button>
              <div className="divider">X</div>
              <div>
                {todoList && setTodoList && setCount
                  ? todoList.map((todo) => {
                      
                      return (todo.category === category ? (
                        <ShowSingleTask
                          todo={todo}
                          todoList={todoList}
                          setTodoList={setTodoList}
                          setCount={setCount}
                          key={todo.id}
                        />
                      ) : (
                        ""
                      ))
                    })
                  : ""}
                
                {
                  console.log('showAllTasks')
                }
              </div>
              {
                console.log("showAlltasks!!!!")
              }
              <CreateNewTask categoryName={category} />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowAllTasks;
