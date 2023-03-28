import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { GithubService } from './github.service';
import config from '../../config';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [config],
        }),
      ],
      providers: [GithubService],
    }).compile();

    service = module.get<GithubService>(GithubService);
  });

  describe('getCommits', () => {
    it('should return an array of commits', async () => {
      const result = await service.getCommits();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return an array of commits for a specific branch', async () => {
      const branches = await service.getBranches();
      const result = await service.getCommits(branches[0].commit.sha);
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('getCommit', () => {
    it('should return a single commit', async () => {
      const branches = await service.getBranches();
      const commitSha = branches[0].commit.sha;
      const commit = await service.getCommit(commitSha);
      expect(commit.sha).toBe(commitSha);
    });
  });

  describe('getRepository', () => {
    it('should return repository information', async () => {
      const result = await service.getRepository();
      expect(result.name).toBeTruthy();
      expect(result.owner.login).toBeTruthy();
    });
  });

  describe('getBranches', () => {
    it('should return an array of branches', async () => {
      const result = await service.getBranches();
      expect(Array.isArray(result)).toBe(true);
    });
  });
});
