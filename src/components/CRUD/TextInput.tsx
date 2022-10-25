import { useContext } from "react";
import { TaskContext } from "../../App";

export interface ICategoryInput {
  name: string;
  setName: (value: string) => void;
  handleSubmitCate?: (value: any) => void;
  isAddList?: boolean;
  setIsAddList?: (value: boolean) => void;
  switchOffEdit?:() => void;
}

const Form = ({ name, setName, setIsAddList, handleSubmitCate, switchOffEdit }: ICategoryInput) => {
  const {
    categoryCreateError,
  } = useContext(TaskContext);

  const handleCancel = () => {
    if(!switchOffEdit) return;
    switchOffEdit();

  };
  return (
    <form
      className="w-96 input input-bordered"
      onSubmit={handleSubmitCate}
    >
      <div className="flex items-center py-2">
        <div>
          <input
            
            className="appearance-none bg-transparent border-none text-white pb-2 px-2 focus:outline-none"
            type="text"
            value={name}
            placeholder="Type here"
            aria-label="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="ml-12">
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white rounded"
            type="submit"
          >
            Submit
          </button>
          <button
            className="flex-shrink-0 ml-1 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm rounded"
            type="button"
            onClick={ handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
      <label className="label">

        {categoryCreateError ? (
          <span className="text-red-600 font-medium">
            {categoryCreateError}
          </span>
        ) : (
          ""
        )}
      </label>
    </form>
  );
};

export default Form;
