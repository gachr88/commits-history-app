import { Controller, Get } from '@nestjs/common';
import { GithubService } from '../../services/github.service';

@Controller('branches')
export class BranchController {
  constructor(private githubService: GithubService) {}

  @Get()
  async getBranches(): Promise<any[]> {
    return this.githubService.getBranches();
  }
}
