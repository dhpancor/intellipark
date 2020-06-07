import { getRepository, ObjectType, QueryFailedError } from 'typeorm';
import { Request, Response } from 'express';
import { FindRelationsNotFoundError } from 'typeorm/error/FindRelationsNotFoundError';
import { JsonResponse } from './utils/JsonResponse';

export class BaseCRUD {
  protected readonly entityClass;

  constructor (entityClass: ObjectType<any>) {
    this.entityClass = entityClass;
  }

  all = async (request: Request, response: Response) => {
    const repository = getRepository(this.entityClass);
    let data = null;
    try {
      data = await repository.find({ relations: this.eagerLoading(request) });
    } catch (e) {
      if (e instanceof FindRelationsNotFoundError) {
        return response.send(new JsonResponse('Invalid eager loading parameter.', false));
      } else {
        return response.send(new JsonResponse('Fatal error. Try again later.', false));
      }
    }
    return response.send(new JsonResponse(data));
  }

  one = async (request: Request, response: Response) => {
    const repository = getRepository(this.entityClass);
    let data = null;
    try {
      data = await repository.findOne(request.params.id, { relations: this.eagerLoading(request) });
    } catch (e) {
      if (e instanceof FindRelationsNotFoundError) {
        return response.send(new JsonResponse('Invalid eager loading parameter.', false));
      } else {
        return response.send(new JsonResponse('Fatal error. Try again later.', false));
      }
    }
    return response.send(new JsonResponse(data));
  }

  save = async (request: Request, response: Response) => {
    const repository = getRepository(this.entityClass);
    let data = null;
    try {
      data = await repository.save(request.body);
    } catch (e) {
      if (e instanceof QueryFailedError) {
        return response.send(new JsonResponse('Values submitted were not valid.', false));
      } else {
        return response.send(new JsonResponse('Fatal error. Try again later.', false));
      }
    }
    return response.send(new JsonResponse(data));
  }

  remove = async (request: Request, response: Response) => {
    const repository = getRepository(this.entityClass);
    let data = null;
    try {
      data = await repository.delete({ id: request.params.id });
    } catch (e) {
      return response.send(new JsonResponse('Fatal error. Try again later.', false));
    }
    return response.send(new JsonResponse(data.raw.affectedRows, data.raw.affectedRows > 0));
  }

  private eagerLoading = (request: Request): string[] => {
    if (Object.keys(request.query).length === 0 && request.query.constructor === Object) {
      return [];
    } else {
      const relations = ['vehicle', 'client', 'accessLogs'];

      if ('withAll' in request.query) { return relations; } else {
        if ('withVehicle' in request.query) { return [relations[0]]; }

        if ('withClient' in request.query) { return [relations[1]]; }

        if ('withAccessLog' in request.query) { return [relations[2]]; }
      }

      return [];
    }
  }
}
