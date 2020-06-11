import { BaseCRUD } from './BaseCRUD';
import { Request, Response } from 'express';
import { JsonResponse } from './utils/JsonResponse';
import { User } from '../entity/User';
import { getRepository, QueryFailedError } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class UsersController extends BaseCRUD {
  constructor () {
    super(User);
  }

  save = async (request: Request, response: Response) => {
    const repository = getRepository(this.entityClass);
    try {
      const user = new User();
      if (request.body.newPassword) {
        user.password = await bcrypt.hash(request.body.newPassword, 10);
      }
      // Cleanup the request body
      if (request.body.password) {
        delete request.body.password;
      }
      Object.assign(user, request.body);
      await repository.save(user);
    } catch (e) {
      if (e instanceof QueryFailedError) {
        return response.send(new JsonResponse('Values submitted were not valid.', false));
      } else {
        return response.send(new JsonResponse('Fatal error. Try again later.', false));
      }
    }
    return response.send(new JsonResponse('User saved.'));
  }

  whoAmI = async (request: Request, response: Response) => {
    let data = null;
    try {
      data = request.user;
    } catch (e) {
      console.log(e);
      return response.send(new JsonResponse('Fatal error. Try again later.', false));
    }
    return response.send(new JsonResponse(data));
  }
}
