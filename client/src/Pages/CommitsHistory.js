import {useState, useEffect} from 'react';
import moment from 'moment';
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
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRepository = async() => {
            setLoading(true);
            const response = await getRepository();
            const repo = {
                name: response.name,
                owner: response.owner.login, 
                lastUpdate: moment(response.pushed_at).format('MM/DD/YYYY'),
                url: response.html_url
            }            
            setLoading(false);
            setRepository(repo);
            
        }
        fetchRepository().catch(console.error);
    }, []);

    return (
        <div className="container-xl px-3 px-md-4 px-lg-5 mt-4">
            <Header data={repository}/>
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