import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { CreateRouteUseCase } from '../core/application/create-route.use-case';
import { ListAllRouteUseCase } from '../core/application/list-all-route.use-case';
import { FindRouteByIdUseCase } from '../core/application/find-route-by-id.use-case';

@Controller('routes')
export class RoutesController {
  constructor(
    private readonly createRouteUseCase: CreateRouteUseCase,
    private readonly listAllRouteUseCase: ListAllRouteUseCase,
    private readonly findRouteByIdUseCase: FindRouteByIdUseCase,
  ) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.createRouteUseCase.execute(createRouteDto);
  }

  @Get()
  findAll() {
    return this.listAllRouteUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findRouteByIdUseCase.execute(id);
  }
}
