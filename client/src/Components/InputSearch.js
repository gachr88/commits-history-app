const InputSearch = () => {
    return (
        <div className="border-solid border-2 border-black  rounded-md cursor-pointer flex">            
            <input className="flex-1 indent-1 outline-none bg-transparent p-1" type="text" placeHolder="Search by commit name"/>
            <button className="border-solid border-black border-l-2 px-2 py-1 bg-gray-100  rounded-r-md "><i className="mr-1">v</i> Search </button>            
            <ul className="hidden">
                <li>Main</li>
                <li>Develop</li>
            </ul>  
        </div>  
    )
}

export default InputSearch;