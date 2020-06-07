import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { JsonResponse } from './utils/JsonResponse';
import * as jwt from 'jsonwebtoken';

export class AuthController {
  static login = async (request: Request, response: Response) => {
    const repository = getRepository(User);
    try {
      const user = await repository.findOneOrFail({ email: request.body.email, password: request.body.password });
      const token = jwt.sign({ id: user.id }, 'test123', { expiresIn: '30d' });
      return response.send({ token });
    } catch (e) {
      return response.status(401).send(new JsonResponse('Credentials not valid', false));
    }
  };

  static logout = async (request: Request, response: Response) => {
    return response.send(new JsonResponse({}, true));
  };
}
