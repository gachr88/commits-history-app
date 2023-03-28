import UserTrack from "./UserTrack";
const CommitBox = () => {
    return (
        <li className="border-solid border-black border-b-2 last-of-type:border-b-0  p-2 flex">
            <div className="flex-1">
                <h4>Add Github service and dtos to server project</h4>             
                <UserTrack/> 
            </div>
            <span className="px-5 py-2 border-solid border-black border-2 rounded-md bg-gray-100 hover:bg-gray-200">
               <p className="text-blue-600 cursor-pointer">785bc8979a</p> 
            </span>                        
        </li>
    )
}

export default CommitBox;