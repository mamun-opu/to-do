import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TaskInfo from './pages/ShowTaskInfo';
import { createContext, useState } from 'react';
import { ITask } from './components/CRUD/CreateNewTask';
import Home from './pages/Home';



export interface ITaskContext {
  errorMessage: string;
  todo:string;
  todoList: ITodo[];
  categoryList: string[];
  categoryCreateError: string;
  count: number,
  handleChange:(value: any)=> void;
  handleSubmit:(value: any)=> void;
  setCount:(val:number)=>void;
  
  setTodoList:(val:ITodo[])=>void;
  setErrorMessage:(val: string) => void;
  setCategoryCreateError:(val: string) => void;
  setCategoryList:(val: string[])=>void;
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
  

 
  return (
    <div className="App">
      <TaskContext.Provider value = {{
        todoList,
        count,
        setCount,
        errorMessage, 
        categoryCreateError,
        categoryList,
        setTodoList,
        setErrorMessage,
        setCategoryCreateError,
        setCategoryList
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
