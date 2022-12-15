import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
       host: 'us-cdbr-east-06.cleardb.net',
      port: 3306,
      username: 'b2a3dbbacf569f',
      password: '7dae730b',
      database: 'heroku_c600e56fe8c3785',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: 'root',
      // database: 'reportsdb',
      entities: ['dist/**/**.entity{.ts,.js}'],
      //entities: [Role,User],//not work in web app
      synchronize: true,
    }),
    ReportsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
