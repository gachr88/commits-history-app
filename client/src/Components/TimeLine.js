const TimeLine = ({title, children, onReload}) => {
    const isEmpty = title ==='-';
    const clickHandler = () => {
        onReload();
    }
    return (
        <div>
            <div className="flex">
                <p className="flex-1">TimeLine result for: <span className="font-bold" >{title}</span></p>
                {
                    !isEmpty && 
                    <button 
                        className="text-sm text-blue-600 ml-2 cursor-pointer hover:text-blue-800"
                        onClick={clickHandler}
                    >
                        Reload commits
                    </button>
                }
            </div>            
            {children}
        </div>
    );
}

export default TimeLine;