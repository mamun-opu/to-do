import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TaskInfo from './pages/ShowTaskInfo';
import { createContext, useState } from 'react';
import Home from './pages/Home';
import ShowCompletedTask from './pages/ShowCompletedTask';



export interface ITaskContext {
  text: string;
  setText: (value: string) => void;
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
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [categoryCreateError, setCategoryCreateError] = useState('');
  const [categoryList, setCategoryList] = useState<string[]>([]);
  
  // console.log(categoryList)
 
  return (
    <div className="App">
      <TaskContext.Provider value = {{
        text,
        setText,
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
          <Route
            path="/completed-task"
            element={<ShowCompletedTask />}
          />
        </Routes>
      </BrowserRouter>
      </TaskContext.Provider>
    </div>
  );
}

export default App;
