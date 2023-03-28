const Branches = () => {
    return (
        <div className="border-solid border-2 border-black p-1 rounded-md inline-block hover:bg-gray-100 cursor-pointer">
            <div className="flex ">
                <p className="flex-1 mr-5 ml-1">Select a branch</p>
                <i className="mr-1">v</i>
            </div>            
            <ul className="hidden">
                <li>Main</li>
                <li>Develop</li>
            </ul>  
        </div>                      
    );
}

export default Branches;