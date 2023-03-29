import { useState, useEffect, useCallback } from 'react';
import * as githubUtils from '../utils/githubUtil';
import {
    getRepository,
    getBranches,
    getCommitsByBranch,
} from '../services/gitHubApis';

const useGithub = () => {
    const [repository, setRepository] = useState({});
    const [branches, setBranches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [commits, setCommits] = useState({});
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [searchingForLabel, setSearchingForLabel] = useState('');
    useEffect(() => {
        const fetchRepository = async () => {
            setIsLoading(true);
            const repositoryResponse = await getRepository();
            const branchesResponse = await getBranches();
            const repo = githubUtils.getFormattedRepo(repositoryResponse);
            const branchList = branchesResponse.map(githubUtils.getFormattedBranch);
            setIsLoading(false);
            setRepository(repo);
            setBranches(branchList);

        }
        fetchRepository().catch(console.error);
    }, []);

    const loadCommits = useCallback(async (branch) => {    
        const commitsResponse = await getCommitsByBranch(branch);
        const commitMap = githubUtils.getCommitMapByDate(commitsResponse)
        setCommits(commitMap);
    }, []);

    useEffect(() => {
        if (selectedBranch) {
            loadCommits(selectedBranch).catch(console.error);
        }
    }, [selectedBranch, loadCommits]);

    const branchChange = (currentBranch) => {
        setSelectedBranch(currentBranch.id);
        if (!currentBranch.id) {
            setSearchingForLabel('');
        }
        else {
            setSearchingForLabel(` Branch:${currentBranch.name}`);
        }
    }

    const reloadCommits = () => {
        if (selectedBranch) {
            loadCommits(selectedBranch);
        }
    }

    const findCommits = (value) => {
        const datesFound = {}
        setSearchingForLabel(` Commits contains:${value}`);
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
        titleResult: searchingForLabel,
        branchChange,
        reloadCommits,
        findCommits
    }

}

export default useGithub;