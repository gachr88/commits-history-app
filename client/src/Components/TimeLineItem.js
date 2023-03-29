import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCodeCommit} from '@fortawesome/free-solid-svg-icons';

library.add(faCodeCommit);

const TimeLineItem = ({ date, children}) => {
    return (
        <div className="border-l-2 border-solid border-x-gray-200 p-5  ">
            <i className="absolute left-3 bg-white"><FontAwesomeIcon icon={faCodeCommit} /></i>
            <p>Commits on {moment(date,'YYYY-MM-DD').format('MMM DD, YYYY')}</p>
            <ul className="border-solid border-gray-200 border rounded-md truncate">
                {children}
            </ul>            
        </div>
    )
}

export default TimeLineItem;