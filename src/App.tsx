import './App.css';
import Tasks from './components/Tasks/Tasks';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TaskInfo from './components/TaskInfo/TaskInfo';
import { createContext, useState } from 'react';

const defaultState = {
  todoList: []
};

export interface ITaskContext {
  todoList: ITodoList[];
  setTodoList?: any;
}

export interface ITodoList {
  id: string,
  name: string,
  isCompleted: boolean,
}

export const TaskContext = createContext<ITaskContext>(defaultState);


function App() {
  const [todoList, setTodoList] = useState<ITodoList[]>([]);

  return (
    <div className="App">
      <TaskContext.Provider value = {{todoList, setTodoList}}>
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
