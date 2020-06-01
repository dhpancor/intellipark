import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import routes from './routes';

createConnection().then(async connection => {
  // create express app
  const app = express();
  app.use(bodyParser.json());

  // setup express app here
  app.use(cors());
  app.use(helmet());

  // use this routes
  app.use('/api/v1/', routes);

  // start express server
  app.listen(3000);

  // Uncomment line below to insert dummy test data
  // await connection.runMigrations();

  console.log('TS-Backend started on http://localhost:3000');
}).catch((error) => console.log(error));
