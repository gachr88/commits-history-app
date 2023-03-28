import { Controller, Get } from '@nestjs/common';
import { GithubService } from '../../services/github.service';
import { GetRepositoryResponse } from '../../dtos/responseAPIs.dto';

@Controller('repository')
export class RepositoryController {
  constructor(private githubService: GithubService) {}

  @Get()
  async getRepository(): Promise<GetRepositoryResponse> {
    return this.githubService.getRepository();
  }
}
