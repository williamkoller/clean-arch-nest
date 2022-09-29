import { Route, RouteProps } from '../../../../core/domain/route.entity';
import { DataSource } from 'typeorm';
import { RouteTypeOrmRepository } from './route-typeorm.repository';
import { RouteSchema } from './route.schema';

describe('RouteTypeOrmRepository Test', () => {
  it('should insert a new route', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: false,
      entities: [RouteSchema],
    });
    await dataSource.initialize();
    const ormRepo = dataSource.getRepository(Route);
    const repository = new RouteTypeOrmRepository(ormRepo);
    const routeProps: RouteProps = {
      title: 'my_route',
      start: { lat: 20, lng: 1 },
      end: { lat: 34, lng: 4 },
    };

    const route = Route.create(routeProps);
    await repository.insert(route);
    const routeFound = await ormRepo.findOneBy({ id: route.id });
    expect(routeFound.toJSON()).toStrictEqual(route.toJSON());
  });
});
