import './App.css';
import Tasks from './components/Tasks/Tasks';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TaskInfo from './components/TaskInfo/TaskInfo';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/'element = {<Tasks />} />
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
