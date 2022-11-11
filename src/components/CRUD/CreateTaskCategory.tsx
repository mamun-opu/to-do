import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import { TaskContext } from "../../App";
import InputText from "./InputText";
import { addNewCategory } from "./operations";
export interface ICategoryInput {
  name: string;
  setName: (value: string) => void;
  buttonInputValue: string;
  handleSubmitCate?: (value: any) => void;
  isAddList?: boolean;
  setIsAddList?: (value: boolean) => void;
}

const CreateTaskCategory = () => {
  const [isAddList, setIsAddList] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const {
    setCategoryCreateError,
    categoryList,
    setCategoryList,
  } = useContext(TaskContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!categoryList || !setCategoryList || !setCategoryCreateError) {
      return;
    }
    const added = addNewCategory(
      categoryName,
      categoryList,
      setCategoryList,
      setCategoryCreateError
    );
    if (added) {
      setCategoryName("");
      setIsAddList(false);
    }
  };

  const handleCancel = () => {
    setCategoryName("");
    setIsAddList(false);
    setCategoryCreateError && setCategoryCreateError("");
  };

  return (
    <div className="w-56 md:w-64 lg:w-80 mt-8 mx-2">
      {!isAddList ? (
        <button
          onClick={() => setIsAddList(true)}
          className="btn btn-sm md:btn-md btn-block"
        >
          <FontAwesomeIcon icon={faLayerGroup} />
          <span className="ml-3">Add new Category</span>
        </button>
      ) : (
        <InputText
          name={categoryName}
          setName={setCategoryName}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default CreateTaskCategory;
