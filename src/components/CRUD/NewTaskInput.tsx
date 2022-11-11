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
      <form className="w-auto rounded-xl bg-gray-800" onSubmit={handleSubmit}>
        <div className="flex h-9 md:h-full items-center border rounded py-1 md:py-2">
          <div>
            <input
              className="appearance-none bg-transparent w-full text-white mr-1 md:mr-3 py-1 px-2 focus:outline-none"
              type="text"
              name="name"
              value={todo.name}
              placeholder="Type here..."
              onChange={onChangeHandler}
            />
          </div>
          <button
            className="flex-shrink-0 bg-teal-500 w-lg hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-2 text-white md:py-1 md:px-2 rounded"
            type="submit"
          >
            Submit
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 md:px-2 rounded"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
      <label className="label">
        {errorMessage && (
          <span className="text-red-600 font-medium">{errorMessage}</span>
        )}
      </label>
    </div>
  );
};

export default NewTaskInput;
