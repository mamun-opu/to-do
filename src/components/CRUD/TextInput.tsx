import { useContext } from "react";
import { TaskContext } from "../../App";

export interface ICategoryInput {
  name: string;
  setName: (value: string) => void;
  buttonInputValue: string;
  handleSubmit: (value: any) => void;
  isAddList?: boolean;
  setIsAddList?: (value: boolean) => void;
}
const Form = ({
  name,
  setName,
  handleSubmit,
  buttonInputValue,
  isAddList,
  setIsAddList,
}: ICategoryInput) => {
  const { categoryCreateError } = useContext(TaskContext);

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     <div className="form-control w-full max-w-xs">
    //       {/* <label className="label">
    //         <span className="label-text text-red-600">
    //           {categoryCreateError}
    //         </span>
    //       </label> */}
    //       <input
    //         type="text"
    //         value={name}
    //         placeholder="Type here"
    //         className="input input-bordered w-full max-w-xs"
    //         onChange={(e) => setName(e.target.value)}
    //       />

    //       <button
    //         onClick={() => setIsAddList && setIsAddList(false)}
    //         className="btn btn-active btn-ghost"
    //       >
    //         Cancel
    //       </button>
    //       <button type="submit" className="btn btn-active ml-2 btn-ghost">
    //         {buttonInputValue}
    //       </button>
    //     </div>
    //   </label>
    // </form>

    <form className="w-full input input-bordered" onSubmit={handleSubmit}>
      <div className="flex items-center py-2">
        <input
          className="appearance-none bg-transparent border-none text-white pb-2 px-2 focus:outline-none"
          type="text"
          value={name}
          placeholder="Type here"
          aria-label="Full name"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white mb-2 rounded"
          type="submit"
        >
          Submit
        </button>
        <button
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 mb-1 rounded"
          type="button"
          onClick={() => setIsAddList && setIsAddList(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
