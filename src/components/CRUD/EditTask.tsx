import { useContext } from "react";
import { TaskContext } from "../../App";
import { editTask } from "./operations";
import TextInput from "./TextInput";

export interface IEditTask {
  id: string;
  newInput: string;
  category: string;
  setNewInput: (val: any) => void;
  setDisplay: (val: boolean) => void;
  isAddList?: boolean;
  setIsAddList?: (value: boolean) => void;
}

const EditTask = ({
  id,
  category,
  setDisplay,
  newInput,
  setNewInput,
}: IEditTask) => {
  const { todoList, setErrorMessage, setTodoList } = useContext(TaskContext);

  const EditTaskName = (e: any) => {
    e.preventDefault();
    if (!todoList || !setErrorMessage || !setTodoList) return;

    editTask(newInput, id, category, todoList, setErrorMessage, setTodoList);
    setNewInput("");
    setDisplay(true);
  };

  return (
    <TextInput
      name={newInput}
      setName={setNewInput}
      handleSubmitCate={EditTaskName}
      buttonInputValue="edit done"
    />
  );
};

export default EditTask;
