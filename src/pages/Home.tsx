import ShowAllTasks from "../components/Visualization/ShowAllTasks";
import CreateTaskCategory from "../components/CRUD/CreateTaskCategory";

const Home = () => {
  return (
    <div className="h-screen w-screen pt-20 pb-20 bg-zinc-800">
      <div className="rounded flex h-full w-5/6 overflow-x-scroll mx-auto bg-stone-300">
        <ShowAllTasks />
        <CreateTaskCategory />
      </div>
    </div>
  );
};

export default Home;
