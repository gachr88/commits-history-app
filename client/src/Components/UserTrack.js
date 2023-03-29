import moment from "moment";
import { useMemo } from 'react'

const UserTrack = ({ user, avatarUrl, time }) => {
    const formattedDateTime = useMemo(() => {        
        return moment(time).format('HH:mm')
    }, [time])

    return (
        <div className="flex">
            <img className="h-4" src={avatarUrl} alt="user-logo" />
            <p className="font-bold text-xs">{user}</p>
            <p className="text-xs indent-1">committed at {formattedDateTime}</p>
        </div>
    );
}

export default UserTrack;