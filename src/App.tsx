import './App.css';
import Tasks from './components/Tasks/Tasks';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TaskInfo from './components/TaskInfo/TaskInfo';
import { createContext, useState } from 'react';


export interface ITaskContext {
  addNewTask: (name: string, id?: string)=> void
  errorMessage: string;
  setErrorMessage:(value: string)=>void;
  todo:string;
  todoList: ITodo[];
  handleChange:(value: any)=> void;
  handleSubmit:(value: any)=> void;
  handleDelete:(key: string)=> void;
  handleComplete:(key: string)=> void;
  handleRedo:(key: string)=> void;
}


export interface ITodo {
  id: string,
  name: string,
  isCompleted: boolean,
}


export const TaskContext = createContext<Partial<ITaskContext>>({});


function App() {

  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const addNewTask = (name: string, id?: string): void => {
    
    if(name.length <= 0){
        setErrorMessage('please insert your task')
        return;
    }
    let isTaskExist = todoList.some(task => task.name === name)
    if(isTaskExist){
        setErrorMessage('Hold on, this task is already in the list')
        return;
    }
    
    if(id){
      const newTodoList = [...todoList]
      const taskIndex = newTodoList.findIndex(task => task.id === id)
      console.log(taskIndex)
      if(taskIndex){
        newTodoList[taskIndex].name = name;
        setTodoList(newTodoList);
        console.log(newTodoList);
        setErrorMessage('');
        return;
      }
      return
    }
    
    const task: ITodo = {
      name,
      id: `${Math.random()*1000}abc_xyz${Math.random()*1000}`,
      isCompleted: false
    }
    setErrorMessage('');
    setTodoList([...todoList, task])
  }


  const handleDelete = (key: string) => {
    let currentList = [...todoList]
    const newTodoList = currentList.filter(task => task.id !== key) 
    setTodoList(newTodoList)
  }


  const handleComplete = (key: string) => {
    let newTodoList = [...todoList]
    const taskIndex = newTodoList.findIndex(task => task.id === key)
    newTodoList[taskIndex].isCompleted = true;
    setTodoList(newTodoList);
  }

  const handleRedo = (key: string) => {
    let newTodoList = [...todoList]
    const taskIndex = newTodoList.findIndex(task => task.id === key)
    newTodoList[taskIndex].isCompleted = false;
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <TaskContext.Provider value = {{
        todoList,
        errorMessage, 
        addNewTask,
        handleDelete,
        handleComplete,
        handleRedo
        }}
      >
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Tasks />} />
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
