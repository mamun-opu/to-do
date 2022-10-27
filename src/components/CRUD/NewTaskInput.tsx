import { useContext } from "react";
import { TaskContext } from "../../App";
import { ITask } from "./CreateNewTask";

export interface INewTakInput {
  todo: ITask;
  setTodo: (val: ITask) => void;
  handleSubmit: (value: any) => void;
  setIsAddTask: (value: boolean) => void;
}
const NewTaskInput = ({
  setIsAddTask,
  todo,
  setTodo,
  handleSubmit,
}: INewTakInput) => {
  const { errorMessage, setErrorMessage } = useContext(TaskContext);

  const onChangeHandler = (event: any): void => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };
  const handleCancel = () => {
    setIsAddTask && setIsAddTask(false);
    setTodo({
      ...todo,
      name: "",
    });
    setErrorMessage && setErrorMessage("");
  };

  return (
    <div>
      <div>
        <label className="label">
          {errorMessage ? (
            <span className="text-red-600 font-medium">{errorMessage}</span>
          ) : (
            ""
          )}
        </label>
      </div>
      <form className="w-full input input-bordered" onSubmit={handleSubmit}>
        <div className="flex items-center py-2">
          <div>
            <input
              className="appearance-none bg-transparent border-none text-white pb-2 px-2 focus:outline-none"
              type="text"
              name="name"
              value={todo.name}
              placeholder="Type here"
              onChange={onChangeHandler}
            />
          </div>
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white mb-2 rounded"
            type="submit"
          >
            Submit
          </button>
          <button
            className="flex-shrink-0 ml-1 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 mb-1 rounded"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskInput;
