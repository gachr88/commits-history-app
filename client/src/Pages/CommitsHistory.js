import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from "../Components/Header";
import Dropdown from "../Components/Dropdown";
import InputSearch from "../Components/InputSearch";
import TimeLine from "../Components/TimeLine";
import TimeLineItem from "../Components/TimeLineItem";
import CommitBox from "../Components/CommitBox";
import EmptyMessage from '../Components/EmptyMessage';
import Loader from '../Components/Loader';
import useGithub from '../hooks/useGitHub';


const CommitsHistory = () => {
    const { repository,
        branches,
        isLoading,
        commits,
        selectedBranch,
        titleResult,
        findCommits,
        branchChange,
        reloadCommits
    } = useGithub();
    
    const notify = (message, notifyId) => {
        toast(message, { toastId: notifyId });
    }

    const searchClick = (value) => {
        if (!value) return;
        if (!selectedBranch) {
            notify("Please select a branch to search for results", "searchNotification");
        }
        findCommits(value);
    }

    return (
        <div className="container-xl px-3 px-md-4 px-lg-5 mt-4">
            <ToastContainer limit={1} />
            {isLoading && <Loader />}
            <Header data={repository} />
            <div className="p-2">
                <Dropdown selected={branches[0]} data={branches} onChange={branchChange} />
                <div className="my-5">
                    <InputSearch onSearch={searchClick} />
                </div>
                <TimeLine title={titleResult} onReload={reloadCommits}>
                    {!selectedBranch && <EmptyMessage message='Please select a branch to show commits' />}
                    {selectedBranch && Object.keys(commits).map((commitDate) => {
                        return (
                            <TimeLineItem key={commitDate} date={commitDate}>
                                {commits[commitDate].map((commit) => {
                                    return (<CommitBox key={commit.id} data={commit} />);
                                })}
                            </TimeLineItem>
                        );
                    })}
                </TimeLine>
            </div>
        </div>
    )
};

export default CommitsHistory;