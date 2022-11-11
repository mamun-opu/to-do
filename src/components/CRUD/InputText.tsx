import { useContext } from "react";
import { TaskContext } from "../../App";

interface IInputText {
  name: string;
  setName: (value: string) => void;
  handleSubmit: (value: any) => void;
  handleCancel: () => void;
}

export default function InputText({
  handleSubmit,
  handleCancel,
  setName,
  name,
}: IInputText) {
  const { categoryCreateError, errorMessage } = useContext(TaskContext);

  return (
    <div>
      <form className="w-56 md:w-64 lg:w-80 rounded-xl bg-gray-800" onSubmit={handleSubmit}>
        <div className="flex h-9 md:h-full items-center border rounded py-1 md:py-2">
          <div>
            <input
              className="appearance-none bg-transparent border-none text-white w-full pb-2 px-2 focus:outline-none"
              type="text"
              name="name"
              value={name}
              placeholder="Type here"
              onChange={(e) => setName(e.target.value)}
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
          {categoryCreateError && (
            <span className="text-red-600 font-medium">
              {categoryCreateError}
            </span>
          )}
          {errorMessage && (
            <span className="text-red-600 font-medium">{errorMessage}</span>
          )}
        </label>
    </div>
  );
}
