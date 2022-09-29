import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RouteSchema } from './core/infra/db/typeorm/route.schema';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, 'database.sqlite'),
      synchronize: true,
      logging: true,
      entities: [RouteSchema],
    }),
    RoutesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
