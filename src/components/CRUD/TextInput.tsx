import { useContext } from "react";
import { TaskContext } from "../../App";
import { useForm, SubmitHandler } from "react-hook-form";
import { addNewCategory } from "./operations";

export interface ICategoryInput {
  name: string;
  setName: (value: string) => void;
  buttonInputValue: string;
  handleSubmitCate?: (value: any) => void;
  isAddList?: boolean;
  setIsAddList?: (value: boolean) => void;
}
interface IFormInputs {
  name: string;
}

const Form = ({ name, setName, setIsAddList }: ICategoryInput) => {
  const {
    setCategoryCreateError,
    categoryList,
    setCategoryList,
    categoryCreateError,
  } = useContext(TaskContext);

  const onSubmitt: SubmitHandler<IFormInputs> = (data) => {
    if (!categoryList || !setCategoryList || !setCategoryCreateError) {
      return;
    }
    addNewCategory(
      data.name,
      categoryList,
      setCategoryList,
      setCategoryCreateError
    );
    setName("");
  };

  const handleCancel = () => {
    setIsAddList && setIsAddList(false);
    setName("");
    setCategoryCreateError && setCategoryCreateError('')
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  return (
    <form
      className="w-full input input-bordered"
      onSubmit={handleSubmit(onSubmitt)}
    >
      <div className="flex items-center py-2">
        <div>
          <input
            {...register("name", {
              // required: {
              //   value: true,
              //   message: "please enter category name",
              // },
              // maxLength: {
              //   value: 15,
              //   message: "Max length exceeded",
              // },
              // validate: {
              //   positive: (v) =>
              //     (categoryList &&
              //       categoryList.some((category) => v !== category)) ||
              //     "already exist",
              // },
            })}
            className="appearance-none bg-transparent border-none text-white pb-2 px-2 focus:outline-none"
            type="text"
            value={name}
            placeholder="Type here"
            aria-label="name"
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
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 mb-1 rounded"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
      <label className="label">
        {/* {errors.name && (
          <span className="text-red-600 font-medium">
            {errors.name.message}
          </span>
        )} */}

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
