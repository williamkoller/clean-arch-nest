import { Route } from '../../../../core/domain/route.entity';
import { EntitySchema } from 'typeorm';

export const RouteSchema = new EntitySchema<Route>({
  name: 'route',
  target: Route,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    title: {
      type: String,
      length: 255,
    },
    start: {
      type: 'simple-json',
    },
    end: {
      type: 'simple-json',
    },
    points: {
      type: 'simple-json',
    },
  },
});
