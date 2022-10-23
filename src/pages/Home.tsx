import ShowAllTasks from "../components/Visualization/ShowAllTasks";
import CreateTaskCategory from "../components/CRUD/CreateTaskCategory";

const Home = () => {

  return (
    <div className="flex">
      <ShowAllTasks />
      <CreateTaskCategory />
    </div>
  );
};

export default Home;
