import { ITodo } from "../../App";
import { ITask } from "./CreateNewTask";

const addNewCategory = (name: string, categoryList: string[], setCategoryList: Function, setCatError:Function ): boolean => {
  // console.log(categoryList)
  if (name.length <= 0) {
    setCatError("please insert category name");
    return false;
  }
  let isCategoryExist = categoryList.some((category) => category === name);
  if (isCategoryExist) {
    setCatError("This category is already in the list");
    return false;
  }

  setCatError("");
  setCategoryList([...categoryList, name]);
  return true;
};

const addNewTask = (taskToCreate: ITask, setErr: Function, todoList: ITodo[], setTodoList: Function): any => {
  const { name, category } = taskToCreate;

  if (name.length <= 0) {
    setErr("please insert your task");
    return false;
  }
  let isTaskExist = todoList.some(
    (task) => task?.name === name && task.category === category
  );
  if (isTaskExist) {
    setErr("Hold on, this task is already in the list");
    return false;
  }

  const task: ITodo = {
    name,
    category,
    id: `${Math.random() * 1000}abc_xyz${Math.random() * 1000}`,
    isCompleted: false,
  };
  setErr("");
  setTodoList([...todoList, task]);
  return true;
};

const editTask = (name: string, id: string, category: string, todoList: ITodo[], setErr: Function, setTodoList: Function): void => {
  const newTodoList = [...todoList];
  if (name.length <= 0) {
    return;
  }
  let isTaskExist = todoList.some(
    (task) => task.name === name && task.category === category
  );
  if (isTaskExist) {
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

const completeTask = (key: string, todoList: ITodo[], setCount: Function, setTodoList: Function) => {
  
  let newTodoList = [...todoList];
  const taskIndex = newTodoList.findIndex((task) => task.id === key);
  if(newTodoList[taskIndex].isCompleted === true){
    newTodoList[taskIndex].isCompleted = false;
    setCount((prevCount: number) => prevCount - 1);
  } else{
    newTodoList[taskIndex].isCompleted = true;
    setCount((prevCount: number) => prevCount + 1);
  }
  
 
  setTodoList(newTodoList);
};

const redoTask = (key: string, todoList: ITodo[], setCount: Function, setTodoList: Function) => {
  let newTodoList = [...todoList];
  const taskIndex = newTodoList.findIndex((task) => task.id === key);
  newTodoList[taskIndex].isCompleted = false;
  setTodoList(newTodoList);
  setCount((prevCount: number) => prevCount - 1);
};
const deleteCategory = (category: string, todoList: ITodo[], setTodoList: Function, categoryList: string[], setCategoryList: Function) => {
  let currentList = [...todoList];
  const newTodoList = currentList.filter((task) => task.category !== category);
  setTodoList(newTodoList);
  let currentCateList = [...categoryList];
  const newCateList = currentCateList.filter(cate => cate !== category);
  setCategoryList(newCateList);
}

export {
  addNewCategory,
  addNewTask,
  editTask,
  deleteTask,
  completeTask,
  redoTask,
  deleteCategory
};
