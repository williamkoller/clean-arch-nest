import { Test, TestingModule } from '@nestjs/testing';
import { FindRouteByIdUseCase } from '../core/application/find-route-by-id.use-case';
import { ListAllRouteUseCase } from '../core/application/list-all-route.use-case';
import { CreateRouteUseCase } from '../core/application/create-route.use-case';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

describe('RoutesController', () => {
  let controller: RoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutesController],
      providers: [
        RoutesService,
        CreateRouteUseCase,
        ListAllRouteUseCase,
        FindRouteByIdUseCase,
      ],
    }).compile();

    controller = module.get<RoutesController>(RoutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
