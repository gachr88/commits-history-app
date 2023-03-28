import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    server: {
      port: process.env.PORT || 8000,
    },
    github: {
      token: process.env.GITHUB_API_TOKEN,
      owner: process.env.GITHUB_OWNER_NAME,
      repo: process.env.GITHUB_REPO_NAME,
    },
  };
});
