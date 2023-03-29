import { useState, useEffect } from 'react';
import moment from 'moment';
import {
    getRepository,
    getBranches,
    getCommitsByBranch,
} from '../services/gitHubApis';

const useGithub = () => {
    const [repository, setRepository] = useState({});
    const [branches, setBranches] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [commits, setCommits] = useState({});
    const [reloadCommits, setReloadCommits] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [titleResult, setTitleResult] = useState('-');    

    useEffect(() => {
        const fetchRepository = async () => {
            setLoading(true);
            const repositoryResponse = await getRepository();
            const branchesResponse = await getBranches();

            const repo = {
                name: repositoryResponse.name,
                owner: repositoryResponse.owner.login,
                lastUpdate: moment(repositoryResponse.pushed_at).format('MM/DD/YYYY'),
                url: repositoryResponse.html_url
            }

            const branchList = branchesResponse.map((branch) => {
                return {
                    name: branch.name,
                    id: branch.commit.sha
                }
            });
            setLoading(false);
            setRepository(repo);
            setBranches(branchList);

        }
        fetchRepository().catch(console.error);
    }, []);

    useEffect(() => {
        const fetchCommits = async () => {
            const commitList = {};
            const commitsResponse = await getCommitsByBranch(selectedBranch);
            commitsResponse.forEach((item) => {
                const { commit } = item;
                const commitDate = moment(commit.author.date).format('YYYY-MM-DD');
                commitList[commitDate] = commitList[commitDate] ?? [];
                commitList[commitDate].push({
                    id: item.sha,
                    description: commit.message,
                    user: commit.author.name,
                    userUrlImage: item.author.avatar_url,
                    dateTime: commit.author.date,
                    commitURL: item.html_url,
                });
            });
            setCommits(commitList);

        }
        if (!selectedBranch || reloadCommits) {
            fetchCommits().catch(console.error);
            setReloadCommits(false);
        }
    }, [selectedBranch, reloadCommits]);

    const branchChange = (currentBranch) => {
        setSelectedBranch(currentBranch.id);        
        if (!currentBranch.id) {
            setTitleResult('-');
        }
        else {
            setTitleResult(` Branch:${currentBranch.name}`);
        }

    }

    const reloadClick = () => {
        if(selectedBranch) {
            setReloadCommits(true);        
        }        
    }

    const findCommits = (value) => {
        const datesFound = {}
        setTitleResult(` Commits contains:${value}`);
        Object.keys(commits).forEach((date) => {

            const commitsFound = commits[date].filter((commit) => {
                const regex = new RegExp(value, 'gi');
                return !!commit.description.match(regex);
            })
            if (commitsFound.length > 0) {
                datesFound[date] = commitsFound;
            }
        })
        setCommits(datesFound);
    }

    return {    
        repository,
        branches,
        isLoading,
        commits,
        selectedBranch,
        titleResult,
        branchChange,
        reloadClick,
        findCommits
    }

}

export default useGithub;