import { ConnectionOptions } from 'typeorm';

export const DatabaseConfig: ConnectionOptions = {
  name: 'default',
  type: 'mysql',
  host: 'intellipark.cjlzadsgmftp.us-east-1.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'g0dsenkuxd',
  database: 'intellipark',
  cache: true,
  synchronize: true,
  entities: [
    'build/entity/*.js'
  ],
  migrations: [
    'build/migration/*.js'
  ]
};
