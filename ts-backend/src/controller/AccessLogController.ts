import { BaseCRUD } from './BaseCRUD';
import { Request, Response } from 'express';
import { JsonResponse } from './utils/JsonResponse';
import { AccessLog } from '../entity/AccessLog';
import { getConnection, getRepository } from 'typeorm';
import { HumanMillisecondsTime } from './utils/HumanMillisecondsTime';

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
        .cache(HumanMillisecondsTime['3_HOURS'])
        .getRawMany();
    } catch (e) {
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
        .addOrderBy('2', 'ASC')
        .cache(HumanMillisecondsTime['3_HOURS']); // 6 hours

      data = await getConnection()
        .createQueryBuilder()
        .select('a.hour', 'name')
        .addSelect('AVG(a.count)', 'value')
        .from('(' + subquery.getQuery() + ')', 'a')
        .groupBy('a.hour')
        .orderBy('a.hour', 'ASC')
        .cache(HumanMillisecondsTime['3_HOURS']) // 6 hours
        .getRawMany();
    } catch (e) {
      return response.send(new JsonResponse('Fatal error. Try again later.', false));
    }
    return response.send(new JsonResponse(data));
  }

  yearlyAccessesPerDay = async (request: Request, response: Response) => {
    let data = null;
    try {
      data = await getRepository(AccessLog)
        .createQueryBuilder('accesslog')
        .select('DATE(accesslog.createdAt)', 'date')
        .addSelect('COUNT(*)', 'count')
        .where('YEAR(accesslog.createdAt) >= (YEAR(CURDATE()) - 1) AND MONTH(accesslog.createdAt) >= MONTH(CURDATE())')
        .groupBy('DATE(accesslog.createdAt)')
        .orderBy('1', 'ASC')
        .cache(HumanMillisecondsTime['3_HOURS'])
        .getRawMany();
    } catch (e) {
      return response.send(new JsonResponse('Fatal error. Try again later.', false));
    }
    return response.send(new JsonResponse(data));
  }

  todayStats = async (request: Request, response: Response) => {
    let data = null;
    try {
      data = [
        {
          name: 'Current',
          value: await getRepository(AccessLog).createQueryBuilder('accesslog')
            .select('COUNT(*)', 'value')
            .addSelect('"Current"', 'name')
            .where('accesslog.leaveTime IS NULL')
            .groupBy('YEAR(accesslog.createdAt)')
            .getCount()
        },
        {
          name: 'Today',
          value: await getRepository(AccessLog)
            .createQueryBuilder('accesslog')
            .select('COUNT(*)', 'value')
            .addSelect('"Today"', 'name')
            .where('DATE(accesslog.createdAt) = CURDATE()')
            .orWhere('DATE(accesslog.leaveTime) = CURDATE()')
            .groupBy('YEAR(accesslog.createdAt)')
            .getCount()
        }
      ];
    } catch (e) {
      return response.send(new JsonResponse('Fatal error. Try again later.', false));
    }
    return response.send(new JsonResponse(data));
  }
}
