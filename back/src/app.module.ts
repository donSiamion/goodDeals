import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { isAuthenticated } from './app.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { User, UserSchema } from './model/user.schema';
import { UserService } from './service/user.service';
import { UserController } from './controllers/user.controller';
import { Deal, DealsSchema } from './model/deals.schema';
import { DealsService } from './service/deals.service';
import { DealsController } from './controllers/deals.controller';
import { Comment, CommentsSchema } from './model/comments.schema';
import { CommentService } from './service/comment.service';
import { CommentsController } from './controllers/comments.controller';

import { secret } from './utils/const';
import { mongodb } from '../config';

@Module({
  imports: [
    MongooseModule.forRoot(mongodb),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Deal.name, schema: DealsSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentsSchema }]),
    JwtModule.register({
      secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AppController, UserController, DealsController, CommentsController],
  providers: [AppService, UserService, DealsService, CommentService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthenticated)
      .exclude(
        { path: 'api/v1/deals', method: RequestMethod.GET }
      )
      .forRoutes(DealsController);
  }
}
