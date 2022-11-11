import { useContext } from "react";
import { TaskContext } from "../../App";

export interface ICategoryInput {
  name: string;
  setName: (value: string) => void;
  handleSubmitCate?: (value: any) => void;
  isAddList?: boolean;
  switchOffEdit?: () => void;
}

const TextInput = ({
  name,
  setName,
  handleSubmitCate,
  switchOffEdit,
}: ICategoryInput) => {
  const { categoryCreateError } = useContext(TaskContext);

  const handleCancel = () => {
    if (!switchOffEdit) return;
    switchOffEdit();
  };
  return (
    <>
      <form
        className="w-auto rounded-xl bg-gray-800"
        onSubmit={handleSubmitCate}
      >
        <div className="flex h-9 md:h-full items-center border rounded py-1 md:py-2">
          <div>
            <input
              className="appearance-none bg-transparent w-full text-white mr-1 md:mr-3 py-1 px-2 focus:outline-none"
              type="text"
              value={name}
              placeholder="Type here"
              aria-label="name"
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
        {categoryCreateError ? (
          <span className="text-red-600 font-medium">
            {categoryCreateError}
          </span>
        ) : (
          ""
        )}
      </label>
    </>
  );
};

export default TextInput;
