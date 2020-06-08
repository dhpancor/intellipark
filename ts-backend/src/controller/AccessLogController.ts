import { BaseCRUD } from './BaseCRUD';
import { Request, Response } from 'express';
import { JsonResponse } from './utils/JsonResponse';
import { AccessLog } from '../entity/AccessLog';
import { getRepository } from 'typeorm';

export class AccessLogController extends BaseCRUD {
  constructor () {
    super(AccessLog);
  }
}
