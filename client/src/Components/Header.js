const Header = () => {
    return (
        <header className="border-b-2 border-solid border-black p-2 mb-2">
            <div className="flex">
                <span className="p-5 m-2 border-solid border-2 rounded-md bg-gray-200 text-xl">R</span>
                <div>
                    <h1 className="text-xl">Repository Name - Commits History</h1>
                    <p className="text-lg">Repository owner name</p> 
                    <div className="text-sm flex">
                        <span className="flex-1">Last Update</span>
                        <span className="flex-1">Count commits</span>
                    </div>
                </div>                             
            </div>                                  
        </header>
    )
}

export default Header;