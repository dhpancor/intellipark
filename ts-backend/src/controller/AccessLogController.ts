import { BaseCRUD } from './BaseCRUD';
import { Request, Response } from 'express';
import { JsonResponse } from './utils/JsonResponse';
import { AccessLog } from '../entity/AccessLog';
import { getRepository } from 'typeorm';

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
        .getRawMany();
    } catch (e) {
      console.log(e);
      return response.send(new JsonResponse('Fatal error. Try again later.', false));
    }
    return response.send(new JsonResponse(data));
  }
}
