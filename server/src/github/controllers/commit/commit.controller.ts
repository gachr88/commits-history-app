import { Controller, Get, Param, Query } from '@nestjs/common';
import { GithubService } from '../../services/github.service';
import {
  GetCommitsResponse,
  GetCommitResponse,
} from '../../dtos/responseAPIs.dto';

@Controller('commits')
export class CommitController {
  constructor(private githubService: GithubService) {}

  @Get('/:commitId')
  async getCommit(
    @Param('commitId') commitId: string
  ): Promise<GetCommitResponse> {
    return this.githubService.getCommit(commitId);
  }

  @Get()
  async getCommits(
    @Query('branchId') branchId: string
  ): Promise<GetCommitsResponse> {
    return this.githubService.getCommits(branchId);
  }
}
