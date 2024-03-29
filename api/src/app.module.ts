import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from "@nestjs/mongoose";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/volex'),
      ProductModule,
      UserModule,
      AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
