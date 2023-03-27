import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    server: {
      port: process.env.PORT || 8000,
    },
    tokens: {
      githubApi: process.env.GITHUB_API_TOKEN,
    },
  };
});
