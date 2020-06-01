import { Router } from 'express';
import user from './user';
import client from './client';
import vehicle from './vehicle';
import accessLog from './accessLog';
import auth from './auth';

const routes = Router();

routes.use('/users', user);
routes.use('/clients', client);
routes.use('/vehicles', vehicle);
routes.use('/access-logs', accessLog);
routes.use('/auth', auth);

export default routes;
