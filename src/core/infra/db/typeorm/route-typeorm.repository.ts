import { Route } from '../../../../core/domain/route.entity';
import { RouteRepositoryInterface } from '../../../../core/domain/route.repository';
import { Repository } from 'typeorm';

export class RouteTypeOrmRepository implements RouteRepositoryInterface {
  constructor(private readonly ormHelper: Repository<Route>) {}
  async insert(route: Route): Promise<void> {
    await this.ormHelper.save(route);
  }
  async findAll(): Promise<Route[]> {
    return this.ormHelper.find();
  }
  async findById(id: string): Promise<Route> {
    return this.ormHelper.findOneBy({ id });
  }
}
