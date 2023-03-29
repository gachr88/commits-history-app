import { useState } from 'react';
import DropdownItem from './DropdownItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretDown,faCaretUp);

const Branches = ({ data, onChange }) => {
    const [selectedOption, setSelectedOption] = useState('Select a branch');
    const [open, setOpen] = useState(false);
    const dropdownClick = (e) => {
        setOpen(!open);
    }

    const dropdownItemClick = (e, value, description) => {
        e.stopPropagation();
        onChange({id:value, name: description});
        setSelectedOption(description)
        setOpen(!open);
    }

    return (
        <div onClick={dropdownClick} className="w-64 z-10 relative border-solid border border-gray-200 rounded-md inline-block cursor-pointer">
            <div className="flex ">
                <p className="flex-1 mr-5   px-1 py-2 indent-2">{selectedOption}</p>
                <span className="mr-1  py-2">{!open ?  <FontAwesomeIcon icon={faCaretDown} className="text-gray-600" /> : <FontAwesomeIcon className="text-gray-600" icon={faCaretUp} />}</span>
            </div>
            <ul className={`absolute z-10 top-10 w-64 border-solid border border-gray-200 left:0 bg-white ${(!open ? 'hidden' : '')}`}>
                <DropdownItem key={-1} data={{id:null, name:'Select a branch'}} clickEvent={(e) => dropdownItemClick(e, null, 'Select a branch')}/>                    
                {data.map((item) => {
                    return (
                        <DropdownItem key={item.id} data={item} clickEvent={(e) => dropdownItemClick(e, item.id, item.name)}/>                    
                    );
                })}
            </ul>
        </div>
    );
}

export default Branches;