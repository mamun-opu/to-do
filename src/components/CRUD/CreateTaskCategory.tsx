import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
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

const CreateTaskCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [isAddList, setIsAddList] = useState(false);
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
    setCategoryName("");
  };
  const handleCancel = () => {
    setCategoryName("");
    setIsAddList && setIsAddList(false);
    setCategoryCreateError && setCategoryCreateError("");
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  return (
    <div className="w-96 max-w-xs mt-8">
      {!isAddList ? (
        <button onClick={() => setIsAddList(true)} className="btn btn-block">
          <FontAwesomeIcon icon={faLayerGroup} />
          <span className="ml-3">Add new Category</span>
        </button>
      ) : (
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
                value={categoryName}
                placeholder="Type here"
                aria-label="name"
                onChange={(e) => setCategoryName(e.target.value)}
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
      )}
    </div>
  );
};

export default CreateTaskCategory;
