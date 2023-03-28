import { Module } from '@nestjs/common';
import { RepositoryController } from './controllers/repository/repository.controller';
import { BranchController } from './controllers/branch/branch.controller';
import { CommitController } from './controllers/commit/commit.controller';
import { GithubService } from './services/github.service';

@Module({
  controllers: [RepositoryController, BranchController, CommitController],
  providers: [GithubService],
})
export class GithubModule {}
