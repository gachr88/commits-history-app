import UserTrack from "./UserTrack";
const CommitBox = ({data}) => {    
    return (
        <li className="border-solid border-gray-200 border-b last-of-type:border-b-0  p-2 flex">
            <div className="flex-1">
                <h4 className="whitespace-normal">{data.description}</h4>             
                <UserTrack user={data.user} avatarUrl={data.userUrlImage} time={data.dateTime}/> 
            </div>
            <a href={data.commitURL} target="_blank" rel="noreferrer"             
                className="w-36 h-12 px-5 py-2 border-solid border-gray-200 border rounded-md bg-gray-100 hover:bg-gray-200 text-center">
               <p className="text-blue-600 cursor-pointer text-md">{data.id.substring(0, 7)}</p> 
            </a>                        
        </li>
    )
}

export default CommitBox;