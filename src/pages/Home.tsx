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
      <div className="rounded flex h-full w-5/6 mx-auto overflow-x-scroll bg-stone-300">
        <ShowAllTasks />
        <div>
          <CreateTaskCategory />
        </div>
      </div>
      
        {/* <form className="w-56 md:w-64 lg:w-80">
          <div className="flex items-center border rounded border-teal-500 py-1 md:py-2">
            <input
              className="appearance-none bg-transparent w-full text-white mr-3 py-1 px-2 focus:outline-none"
              type="text"
              placeholder="Jane Doe"
              aria-label="Full name"
            />
            <button
              className="flex-shrink-0 bg-teal-500 w-lg hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white md:py-1 md:px-2 rounded"
              type="button"
            >
              Sign Up
            </button>
            <button
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 md:px-2 rounded"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form> */}
      
    </div>
  );
};

export default Home;
