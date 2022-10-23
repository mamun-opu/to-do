import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { TaskContext } from "../../App";
import { addNewCategory } from "./operations";
import TextInput from "./TextInput";

const CreateTaskCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [isAddList, setIsAddList] = useState(false);
  const { setCategoryCreateError, categoryList } = useContext(TaskContext);

  const createNewCategory = (e: any) => {
    e.preventDefault();

    if (!categoryName||!setCategoryCreateError||!categoryList) {
      return;
    }
    addNewCategory(categoryName, setCategoryCreateError, categoryList );
    setCategoryName("");
    setIsAddList(false)
  };

  return (
    <div className="w-92 max-w-xs mt-8">
      {!isAddList ? (
        <button onClick={() => setIsAddList(true)} className="btn btn-block">
          <FontAwesomeIcon icon={faLayerGroup} />
          <span className="ml-3">Add new Category</span>
        </button>
      ) : (
        <TextInput
          name={categoryName}
          setName={setCategoryName}
          buttonInputValue="add category"
          handleSubmit={createNewCategory}
          isAddList = {isAddList}
          setIsAddList = {setIsAddList}
        />
      )}
    </div>
  );
};

export default CreateTaskCategory;
