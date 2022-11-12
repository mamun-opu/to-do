import ShowAllTasks from "../components/Visualization/ShowAllTasks";
import CreateTaskCategory from "../components/CRUD/CreateTaskCategory";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-screen pt-20 pb-20 bg-zinc-800">
      <div className="flex justify-end mb-8 mr-8">
        <Link className="text-teal-400" to={"/completed-task"}>
          /completed task
        </Link>
      </div>
      <div className="rounded flex h-full w-5/6 mx-auto overflow-x-auto bg-stone-300">
        <ShowAllTasks />
        <div>
          <CreateTaskCategory />
        </div>
      </div>
    </div>
  );
};

export default Home;
