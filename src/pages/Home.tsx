import CreateNewTask from '../components/CRUD/CreateNewTask';
import ShowAllTasks from '../components/Visualization/ShowAllTasks';
import CreateTaskCategory from '../components/CRUD/CreateTaskCategory';
import { useContext } from 'react';
import { TaskContext } from '../App';


const Home = () => {
    const {categoryList} = useContext(TaskContext);

    return (
        <div>
            
              {
               categoryList && categoryList.length <= 2 ? 
                <>
                  <h2>Enter Task Category</h2>
                  <CreateTaskCategory />
                </>  : ''
              }
              {
                categoryList && categoryList.length <= 0 ?  '' : 
                <>
                  <h2>Enter Task name</h2>
                  <CreateNewTask /> 
                </> 
              }
              <ShowAllTasks />
            
        </div>
    );
};

export default Home;