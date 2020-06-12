import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import routes from './routes';
import * as passport from 'passport';
import { JWTStrategyConfig } from './loader/PassportLoader';

createConnection({
  name: 'default',
  type: 'mysql',
  host: 'intellipark.cjlzadsgmftp.us-east-1.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'g0dsenkuxd',
  database: 'intellipark',
  entities: [
    'entity/*.js'
  ]
}).then(async connection => {
  // create express app
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // setup express app here
  app.use(cors());
  app.use(helmet());

  // authentication bootstraping
  app.use(passport.initialize());
  passport.use(JWTStrategyConfig);

  // use this routes
  app.use('/api/v1/', routes);

  // start express server
  app.listen(3000);

  // Uncomment line below to insert dummy test data
  // await connection.runMigrations();

  console.log('TS-Backend started on http://localhost:3000');
}).catch((error) => console.log(error));
