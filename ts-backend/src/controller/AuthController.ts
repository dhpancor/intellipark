import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { JsonResponse } from './utils/JsonResponse';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { JWT_SECRET } from '../loader/PassportLoader';

export class AuthController {
  static login = async (request: Request, response: Response) => {
    const repository = getRepository(User);
    try {
      const user = await repository.findOneOrFail({ email: request.body.email }, { select: ['id', 'password'] });
      if (await bcrypt.compare(request.body.password, user.password)) {
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '30d' });
        return response.send({ token });
      } else {
        return response.status(401).send(new JsonResponse('Credentials not valid', false));
      }
    } catch (e) {
      return response.status(401).send(new JsonResponse('Credentials not valid', false));
    }
  };

  static logout = async (request: Request, response: Response) => {
    return response.send(new JsonResponse({}, true));
  };
}
