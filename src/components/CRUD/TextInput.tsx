export interface ICategoryInput {
    name: string;
    setName:(value: string) => void;
    buttonInputValue: string;
    handleSubmit:(value: any)=>void;
  }
const Form = ({ name, setName, handleSubmit, buttonInputValue }: ICategoryInput) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>
            <span style = {{fontSize: 'larger', fontWeight: 'bold', marginRight: '15px'}}>Name:</span>
            <input
                type="text"
                value={name}
                placeholder="type here.."
                onChange={(e)=>setName(e.target.value)}
            />
            </label>
            
            <button type="submit">{buttonInputValue}</button>
        </form>
    );
};

export default Form;
