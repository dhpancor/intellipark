import { BaseCRUD } from './BaseCRUD';
import { Client } from '../entity/Client';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { JsonResponse } from './utils/JsonResponse';
import { AccessLog } from '../entity/AccessLog';

export class ClientsController extends BaseCRUD {
  constructor () {
    super(Client);
  }

  getLastAccesses = async (request: Request, response: Response) => {
    let data = null;
    try {
      // data = await getRepository(Client).findOne(request.params.id, { relations: ['vehicle', 'vehicle.accessLogs'] });
      data = await getRepository(AccessLog)
        .createQueryBuilder('accesslog')
        .innerJoin('accesslog.vehicle', 'vehicle')
        .innerJoin('vehicle.client', 'client')
        .select('accesslog')
        .addSelect(['vehicle.plate', 'vehicle.id'])
        .where('client.id = :clientId')
        .orderBy('accesslog.id', 'DESC')
        .setParameters({ clientId: request.params.id })
        .take(10)
        .getMany();
    } catch (e) {
      console.log(e);
      return response.send(new JsonResponse('Fatal error. Try again later.', false));
    }
    return response.send(new JsonResponse(data));
  }
}
