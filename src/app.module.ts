import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      //  host: 'us-cdbr-east-06.cleardb.net',
      // port: 3306,
      // username: 'b167f3cfab4e67',
      // password: '400541f8',
      // database: 'heroku_8c5feadb42c0d74',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'reportsdb',
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
