import './App.css';
import ShowAllTasks from './components/Visualization/ShowAllTasks';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TaskInfo from './pages/ShowTaskInfo';
import { createContext, Fragment, useState } from 'react';
import CreateTaskCategory from './components/CRUD/CreateTaskCategory';
import CreateNewTask, { ITask } from './components/CRUD/CreateNewTask';
import Home from './pages/Home';


export interface ITaskContext {
  addNewTask: (todo: ITask)=> void
  editTask:(name: string, id: string) => void
  errorMessage: string;
  todo:string;
  todoList: ITodo[];
  categoryList: string[];
  categoryCreateError: string;
  count: number,
  addNewCategory: (value: string) => void;
  handleChange:(value: any)=> void;
  handleSubmit:(value: any)=> void;
  deleteTask:(key: string)=> void;
  completeTask:(key: string)=> void;
  redoTask:(key: string)=> void;
}


export interface ITodo {
  id: string,
  name: string,
  category: string,
  isCompleted: boolean,
}


export const TaskContext = createContext<Partial<ITaskContext>>({});


function App() {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [categoryCreateError, setCategoryCreateError] = useState('');
  const [categoryList, setCategoryList] = useState<string[]>([]);
  

  const addNewCategory = (name: string):void => {

    if(name.length <= 0){
      setCategoryCreateError('please insert some text');
      return;
    }
    let isCategoryExist = categoryList.some(category => category === name)
    if(isCategoryExist){
      setCategoryCreateError('This category is already in the list');
      return;
    }
    
    setCategoryCreateError('')
    setCategoryList([...categoryList, name]);
  }
 

  const addNewTask = (taskToCreate: ITask): void => {
    
    const {name, category} = taskToCreate;
    if(category === ''){
      setErrorMessage('please select category!')
      return;
    }
    if(name.length <= 0){
        setErrorMessage('please insert your task')
        return;
    }
    let isTaskExist = todoList.some(task => task.name === name)
    if(isTaskExist){
        setErrorMessage('Hold on, this task is already in the list')
        return;
    }
     
    const task: ITodo = {
      name,
      category,
      id: `${Math.random()*1000}abc_xyz${Math.random()*1000}`,
      isCompleted: false
    }
    setErrorMessage('');
    setTodoList([...todoList, task])
  }

  const editTask = (name: string, id: string): void => {
    const newTodoList = [...todoList]
    if(name.length <= 0){
      setErrorMessage('please insert your task')
      return;
    }
    let isTaskExist = todoList.some(task => task.name === name)
    if(isTaskExist){
        setErrorMessage('Hold on, this task is already in the list')
        return;
    }
    const taskIndex = newTodoList.findIndex(task => task.id === id)
    if(taskIndex !== -1){
      newTodoList[taskIndex].name = name;
      setTodoList(newTodoList);
      setErrorMessage('');
      return;
    }
    return
  }


  const deleteTask = (key: string) => {
    let currentList = [...todoList]
    const newTodoList = currentList.filter(task => task.id !== key) 
    setTodoList(newTodoList)
  }


  const completeTask = (key: string) => {
    let newTodoList = [...todoList]
    const taskIndex = newTodoList.findIndex(task => task.id === key)
    newTodoList[taskIndex].isCompleted = true;
    setCount(prevCount => prevCount+1)
    setTodoList(newTodoList);
  }

  const redoTask = (key: string) => {
    let newTodoList = [...todoList]
    const taskIndex = newTodoList.findIndex(task => task.id === key)
    newTodoList[taskIndex].isCompleted = false;
    setTodoList(newTodoList);
    setCount(prevCount => prevCount-1)
  }

  return (
    <div className="App">
      <TaskContext.Provider value = {{
        todoList,
        count,
        errorMessage, 
        categoryCreateError,
        addNewCategory,
        categoryList,
        addNewTask,
        editTask,
        deleteTask,
        completeTask,
        redoTask
        }}
      >
      <BrowserRouter>
        <Routes>

          <Route path = '/' element = {
            <Home />
          } />
          
          <Route
            path="/task/:taskId"
            element={<TaskInfo />}
          />
        </Routes>
      </BrowserRouter>
      </TaskContext.Provider>
    </div>
  );
}

export default App;
