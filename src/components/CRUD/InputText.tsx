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
      <form className="w-full input input-bordered" onSubmit={handleSubmit}>
        <div className="flex items-center py-2">
          <div>
            <input
              className="appearance-none bg-transparent border-none text-white pb-2 px-2 focus:outline-none"
              type="text"
              name="name"
              value={name}
              placeholder="Type here"
              onChange={(e) => setName(e.target.value)}
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
      </form>
    </div>
  );
}
