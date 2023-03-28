import { Endpoints } from '@octokit/types';

export type GetCommitResponse =
  Endpoints['GET /repos/{owner}/{repo}/commits/{ref}']['response']['data'];

export type GetCommitsResponse = GetCommitResponse[];

export type GetRepositoryResponse =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data'];

export type GetBranchesResponse =
  Endpoints['GET /repos/{owner}/{repo}/branches']['response']['data'];
