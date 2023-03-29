import moment from "moment";

const UserTrack = ({user, avatarUrl, dateTime}) => {
    return (
        <div className="flex">
            <img className="h-4" src={avatarUrl} alt="user-logo"/>
            <p className="font-bold text-xs">{user}</p>
            <p className="text-xs indent-1">committed at {moment(dateTime).format('HH:mm')}</p>
        </div>
    );
}

export default UserTrack;