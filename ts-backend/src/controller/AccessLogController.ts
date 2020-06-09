import { BaseCRUD } from './BaseCRUD';
import { Request, Response } from 'express';
import { JsonResponse } from './utils/JsonResponse';
import { AccessLog } from '../entity/AccessLog';
import { getConnection, getRepository } from 'typeorm';

export class AccessLogController extends BaseCRUD {
  constructor () {
    super(AccessLog);
  }

  averageTimeSpentByGender = async (request: Request, response: Response) => {
    let data = null;
    try {
      data = await getRepository(AccessLog)
        .createQueryBuilder('accesslog')
        .innerJoin('accesslog.vehicle', 'vehicle')
        .innerJoin('vehicle.client', 'client')
        .select('CEIL((SUM(TIME_TO_SEC(accesslog.leaveTime) - TIME_TO_SEC(accesslog.createdAt)) / 60) / COUNT(*))', 'value')
        .addSelect('client.gender', 'name')
        .groupBy('client.gender')
        .orderBy('client.gender', 'ASC')
        .getRawMany();
    } catch (e) {
      console.log(e);
      return response.send(new JsonResponse('Fatal error. Try again later.', false));
    }
    return response.send(new JsonResponse(data));
  }

  averageBusyHours = async (request: Request, response: Response) => {
    let data = null;
    try {
      const subquery = await getRepository(AccessLog)
        .createQueryBuilder('accesslog')
        .select('HOUR(accesslog.createdAt)', 'hour')
        .addSelect('COUNT(*)', 'count')
        .groupBy('HOUR(accesslog.createdAt)')
        .addGroupBy('DATE(accesslog.createdAt)')
        .orderBy('1', 'ASC')
        .addOrderBy('2', 'ASC');

      data = await getConnection()
        .createQueryBuilder()
        .select('a.hour', 'name')
        .addSelect('AVG(a.count)', 'value')
        .from('(' + subquery.getQuery() + ')', 'a')
        .groupBy('a.hour')
        .orderBy('a.hour', 'ASC')
        .getRawMany();
    } catch (e) {
      console.log(e);
      return response.send(new JsonResponse('Fatal error. Try again later.', false));
    }
    return response.send(new JsonResponse(data));
  }
}
