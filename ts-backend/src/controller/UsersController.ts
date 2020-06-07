import { BaseCRUD } from './BaseCRUD';
import { Request, Response } from 'express';
import { JsonResponse } from './utils/JsonResponse';
import { User } from '../entity/User';

export class UsersController extends BaseCRUD {
  constructor () {
    super(User);
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
