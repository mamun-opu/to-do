import  { useContext, useState } from 'react';
import { TaskContext } from '../../App';
import TextInput from './TextInput'


const CreateTaskCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const { addNewCategory, categoryCreateError } = useContext(TaskContext)

    const createNewCategory = (e: any) => {
        e.preventDefault();

        if(!addNewCategory || !categoryName){
            return;
        }
        addNewCategory(categoryName);
        setCategoryName('')
    }

    return (
        <div>
            <h1 style={{fontWeight: 'bold', fontSize: 'larger', color: 'maroon'}}>{categoryCreateError}</h1>
            {/* <span style = {{fontWeight: 'bold', fontSize: 'larger', color: 'maroon'}}>{errorMessage}</span> */}
            <TextInput name = {categoryName} setName={setCategoryName} buttonInputValue='add category' handleSubmit={createNewCategory}/>
        </div>
    );
};

export default CreateTaskCategory;