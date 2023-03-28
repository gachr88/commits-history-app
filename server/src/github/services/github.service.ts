import { Injectable, Inject, HttpException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Octokit } from 'octokit';
import { RequestError } from '@octokit/request-error';
import {
  GetCommitsResponse,
  GetCommitResponse,
  GetRepositoryResponse,
  GetBranchesResponse,
} from '../dtos/responseAPIs.dto';
import config from '../../config';

@Injectable()
export class GithubService {
  private octokit: Octokit;

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) {
    this.octokit = new Octokit({
      auth: configService.github.token,
    });
  }

  private async request(endpoint: string, options = {}): Promise<any> {
    const headers = {
      'X-GitHub-Api-Version': '2022-11-28',
    };
    try {
      const response = await this.octokit.request(endpoint, {
        ...headers,
        ...options,
        owner: this.configService.github.owner,
        repo: this.configService.github.repo,
      });
      return response;
    } catch (error) {
      if (error instanceof RequestError) {
        const { status, message } = error;
        throw new HttpException(message, status);
      } else {
        throw error;
      }
    }
  }

  async getCommits(branchSha: string = null): Promise<GetCommitsResponse> {

    let opt: object = {};
    if (branchSha) {
      opt = {
        sha: branchSha,
      };
    }
    const { data } = await this.request(
      'GET /repos/{owner}/{repo}/commits',
      opt
    );
    return data;
  }

  async getCommit(sha: string): Promise<GetCommitResponse> {
    const { data } = await this.request(
      'GET /repos/{owner}/{repo}/commits/{ref}',
      { ref: sha }
    );
    return data;
  }

  async getRepository(): Promise<GetRepositoryResponse> {
    const { data } = await this.request('GET /repos/{owner}/{repo}');
    return data;
  }

  async getBranches(): Promise<GetBranchesResponse> {
    const { data } = await this.request('GET /repos/{owner}/{repo}/branches');
    return data;
  }
}
