import { useState } from "react";

const InputSearch = ({onSearch}) => {
    const [value, setValue] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        onSearch(value);
        setValue('');
    }

    const changeHandler = (e) => {
        setValue(e.target.value);
    }
    return (
        <form className="border-solid border border-gray-200  rounded-md cursor-pointer flex" onSubmit={submitHandler}>            
            <input className="flex-1 indent-1 outline-none bg-transparent p-1" type="text" placeholder="Search by commit message" value={value} onChange={changeHandler}/>
            <button type="submit" className="border-solid border-gray-200 border-l-2 px-2 py-1 bg-gray-100  rounded-r-md hover:bg-gray-200"> Search </button>            
            <ul className="hidden">
                <li>Main</li>
                <li>Develop</li>
            </ul>  
        </form>  
    )
}

export default InputSearch;