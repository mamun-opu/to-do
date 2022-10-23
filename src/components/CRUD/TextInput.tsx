import { useContext } from "react";
import { TaskContext } from "../../App";

export interface ICategoryInput {
  name: string;
  setName: (value: string) => void;
  buttonInputValue: string;
  handleSubmit: (value: any) => void;
  isAddList?: boolean;
  setIsAddList?:(value: boolean) => void;
}
const Form = ({
  name,
  setName,
  handleSubmit,
  buttonInputValue,
  isAddList,
  setIsAddList
}: ICategoryInput) => {
  const { categoryCreateError } = useContext(TaskContext);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div className="form-control w-full max-w-xs">
          <label className="label">
          <span className="label-text text-red-600">{categoryCreateError}</span>
          </label>
          <input
            type="text"
            value={name}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt">
              <button onClick={() => setIsAddList && setIsAddList(false)} className="btn btn-active btn-ghost">Cancel</button>
              <button type="submit" className="btn btn-active ml-2 btn-ghost">
                {buttonInputValue}
              </button>
            </span>
          </label>
        </div>
      </label>
    </form>
  );
};

export default Form;
