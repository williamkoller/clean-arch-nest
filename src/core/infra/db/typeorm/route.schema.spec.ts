import { Route } from '../../../../core/domain/route.entity';
import { DataSource } from 'typeorm';
import { RouteSchema } from './route.schema';

describe('RouteSchema Test', () => {
  it('create', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [RouteSchema],
    });
    await dataSource.initialize();
    const route = Route.create({
      title: 'minha rota',
      start: {
        lat: 10,
        lng: 20,
      },
      end: {
        lat: 20,
        lng: 40,
      },
      points: [
        {
          lat: 20,
          lng: 40,
        },
      ],
    });
    const routeRepo = dataSource.getRepository(Route);
    await routeRepo.save(route);
  });
});
