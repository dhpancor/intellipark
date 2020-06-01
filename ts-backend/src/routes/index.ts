import { Router } from 'express';
import user from './user';
import client from './client';
import vehicle from './vehicle';
import accessLog from './accessLog';

const routes = Router();

routes.use('/users', user);
routes.use('/clients', client);
routes.use('/vehicles', vehicle);
routes.use('/access-logs', accessLog);

export default routes;
