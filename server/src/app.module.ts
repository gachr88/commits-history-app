import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppService } from './app.service';
import { GithubModule } from './github/github.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      expandVariables: true,
      validationSchema: Joi.object({
        SERVER_PORT: Joi.number().required(),
        GITHUB_API_TOKEN: Joi.string().required(),
      }),
    }),
    GithubModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
