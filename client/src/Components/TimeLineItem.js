const TimeLineItem = ({children}) => {
    return (
        <div className="border-l-2 border-solid border-x-black p-5  ">
            <i className="absolute left-3.5">O</i>
            <p>Commits on Mar 28, 2023</p>
            <ul className="border-solid border-black border-2 rounded-md truncate">
                {children}
            </ul>            
        </div>
    )
}

export default TimeLineItem;