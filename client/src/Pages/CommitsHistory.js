import {useState, useEfect} from 'react';
import { getRepository } from '../services/gitHubApis';

import Header from "../Components/Header";
import Dropdown from "../Components/Dropdown";
import InputSearch from "../Components/InputSearch";
import TimeLine from "../Components/TimeLine";
import TimeLineItem from "../Components/TimeLineItem";
import CommitBox from "../Components/CommitBox";

const CommitsHistory = () => {
    const [repository, setRepository] = useState({});
    const [branches, setBranches] = useState([]);

    useEfect(() => {

    }, []);

    return (
        <div className="container-xl px-3 px-md-4 px-lg-5 mt-4">
            <Header/>
            <div className="p-2">
                <Dropdown/>
                <div className="my-5">
                    <InputSearch/>
                </div>                
                <TimeLine>
                    <TimeLineItem>
                        <CommitBox/>
                        <CommitBox/>
                    </TimeLineItem>
                    <TimeLineItem>
                        <CommitBox/>
                    </TimeLineItem>
                </TimeLine> 
            </div>
            <div className="text-center">
                <button type="button" className="border-solid border-2 px-10 py-2 rounded-md">Load More</button>                       
            </div>            
        </div>
    )
};

export default CommitsHistory;