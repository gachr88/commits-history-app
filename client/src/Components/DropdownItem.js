const DropdownItem = ({data, clickEvent}) => {
    return (
        <li
            className='border-solid border-t-2 border-gray-200 px-1 py-2 indent-2 truncate first-of-type:border-t-0 hover:bg-gray-100'
            onClick={clickEvent}
        >
            {data.name}
        </li>
    )
}

export default DropdownItem;