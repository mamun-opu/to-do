import './App.css';
import Tasks from './components/Tasks/Tasks';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TaskInfo from './components/TaskInfo/TaskInfo';
import { createContext, useState } from 'react/cjs/react.development';

export const taskContext = createContext();

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <taskContext.Provider value = {[todoList, setTodoList]}>
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element = {<Tasks />} />
          <Route
            path="/task/:taskId"
            element={<TaskInfo />}
          />
        </Routes>
      </BrowserRouter>
      </taskContext.Provider>
    </div>
  );
}

export default App;
