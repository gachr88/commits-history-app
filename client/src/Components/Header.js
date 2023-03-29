const Header = ({ data }) => {
    const { name, owner, lastUpdate,url } = data;

    return (
        <header className="border-b-2 border-solid border-gray-200 p-2 mb-2">
            <div className="flex">
                <span className="p-5 m-2 border-solid border-2 rounded-md bg-gray-200 text-xl">{name?.toUpperCase()[0]}</span>
                <div>
                    <h1 className="text-xl">Commits History</h1>
                    <p className="text-lg text-blue-600"><a href={url} target="_blank"   rel="noreferrer">{owner}/{name}</a></p>
                    <div className="text-sm flex">
                        <span className="flex-1">Last Update: {lastUpdate}</span>                        
                    </div>
                </div>                             
            </div>                                  
        </header>
    )
}

export default Header;