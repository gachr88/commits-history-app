import moment from 'moment';	

export const getCommitMapByDate = (commitList) => {
     return commitList.reduce((result, item) => {
        const { commit } = item;
        const commitDate = moment(commit.author.date).format('YYYY-MM-DD');
        result[commitDate] = result[commitDate] ?? [];
        result[commitDate].push({
            id: item.sha,
            description: commit.message,
            user: commit.author.name,
            userUrlImage: item.author.avatar_url,
            dateTime: commit.author.date,
            commitURL: item.html_url,
        });
        console.log(result);
        return result;
    },
    {}
    );

}

export const getFormattedRepo = (repo) => {
    return {
        name: repo.name,
        owner: repo.owner.login,
        lastUpdate: moment(repo.pushed_at).format('MM/DD/YYYY'),
        url: repo.html_url
    }
}

export const getFormattedBranch = (branch) => {
    return {
        name: branch.name,
        id: branch.commit.sha
    }
}
