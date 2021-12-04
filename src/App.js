import './App.css';
import Tasks from './components/Tasks/Tasks';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TaskInfo from './components/TaskInfo/TaskInfo';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element = {<Tasks />} />
          <Route
            path="/task/:taskId"
            element={<TaskInfo />}
          />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
