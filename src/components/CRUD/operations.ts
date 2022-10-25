import { ITodo } from "../../App";
import { ITask } from "./CreateNewTask";

const addNewCategory = (name: string, categoryList: string[], setCategoryList: Function, setCatError:Function ): void => {
  // console.log(categoryList)
  if (name.length <= 0) {
    setCatError("please insert category name");
    return;
  }
  let isCategoryExist = categoryList.some((category) => category === name);
  if (isCategoryExist) {
    setCatError("This category is already in the list");
    return;
  }

  setCatError("");
  setCategoryList([...categoryList, name]);
};

const addNewTask = (taskToCreate: ITask, setErr: Function, todoList: ITodo[], setTodoList: Function): void => {
  console.log(taskToCreate)
  const { name, category } = taskToCreate;

  if (name.length <= 0) {
    setErr("please insert your task");
    return;
  }
  let isTaskExist = todoList.some(
    (task) => task?.name === name && task.category === category
  );
  if (isTaskExist) {
    setErr("Hold on, this task is already in the list");
    return;
  }

  const task: ITodo = {
    name,
    category,
    id: `${Math.random() * 1000}abc_xyz${Math.random() * 1000}`,
    isCompleted: false,
  };
  setErr("");
  setTodoList([...todoList, task]);
};

const editTask = (name: string, id: string, category: string, todoList: ITodo[], setErr: Function, setTodoList: Function): void => {
  const newTodoList = [...todoList];
  if (name.length <= 0) {
    setErr("please insert your task");
    return;
  }
  let isTaskExist = todoList.some(
    (task) => task.name === name && task.category === category
  );
  if (isTaskExist) {
    setErr("Hold on, this task is already in the list");
    return;
  }
  const taskIndex = newTodoList.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    newTodoList[taskIndex].name = name;
    setTodoList(newTodoList);
    setErr("");
    return;
  }
  return;
};

const deleteTask = (key: string, todoList: ITodo[], setTodoList: Function) => {
  let currentList = [...todoList];
  const newTodoList = currentList.filter((task) => task.id !== key);
  setTodoList(newTodoList);
};

const completeTask = (key: string, todoList: ITodo[], setCount: Function, setTodoList: Function, setCheckColor:Function) => {
  
  let newTodoList = [...todoList];
  const taskIndex = newTodoList.findIndex((task) => task.id === key);
  if(newTodoList[taskIndex].isCompleted === true){
    newTodoList[taskIndex].isCompleted = false;
    setCheckColor(false)
  } else{
    newTodoList[taskIndex].isCompleted = true;
    setCheckColor(true)
  }
  
  setCount((prevCount: number) => prevCount + 1);
  setTodoList(newTodoList);
};

const redoTask = (key: string, todoList: ITodo[], setCount: Function, setTodoList: Function) => {
  let newTodoList = [...todoList];
  const taskIndex = newTodoList.findIndex((task) => task.id === key);
  newTodoList[taskIndex].isCompleted = false;
  setTodoList(newTodoList);
  setCount((prevCount: number) => prevCount - 1);
};

export {
  addNewCategory,
  addNewTask,
  editTask,
  deleteTask,
  completeTask,
  redoTask,
};
