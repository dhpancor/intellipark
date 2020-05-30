import { getRepository, ObjectType } from 'typeorm';
import { Request, Response } from 'express';

export class BaseCRUD {
  private readonly entityClass;

  constructor (entityClass: ObjectType<never>) {
    this.entityClass = entityClass;
  }

  all = async (request: Request, response: Response) => {
    const repository = getRepository(this.entityClass);
    const data = await repository.find();
    return response.send(data);
  }

  one = async (request: Request, response: Response) => {
    const repository = getRepository(this.entityClass);
    const data = await repository.findOne(request.params.id);
    return response.send(data);
  }

  save = async (request: Request, response: Response) => {
    const repository = getRepository(this.entityClass);
    return response.send(repository.save(request.body));
  }

  remove = async (request: Request, response: Response) => {
    const repository = getRepository(this.entityClass);
    const objectToRemove = await repository.findOne(request.params.id);
    return response.send(await repository.remove(objectToRemove));
  }
}
