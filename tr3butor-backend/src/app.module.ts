import { Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';


import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './classes/user/user.module';
import { DaoModule } from './classes/dao/dao.module';
import { DaoQuestModule } from './classes/dao-quest/dao-quest.module';
import { DaoEventModule } from './classes/dao-event/dao-event.module';
import { BlogArticleModule } from './classes/blog-article/blog-article.module';
import { DaoTemplateModule } from './classes/dao-template/dao-template.module';
import { TalentModule } from './classes/talent/talent.module';
import { DaoJobModule } from './classes/dao-job/dao-job.module';
import { DaoBountyModule } from './classes/dao-bounty/dao-bounty.module';
import { DaoGrantModule } from './classes/dao-grant/dao-grant.module';
import { DaoHackathonModule } from './classes/dao-hackathon/dao-hackathon.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule,
    DaoModule,
    DaoQuestModule,
    DaoEventModule,
    BlogArticleModule,
    DaoTemplateModule,
    TalentModule,
    DaoJobModule,
    DaoBountyModule,
    DaoGrantModule,
    DaoHackathonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {

}
