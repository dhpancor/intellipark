import { Router } from 'express';
import { BaseCRUD } from '../controller/BaseCRUD';
import { AccessLog } from '../entity/AccessLog';
import * as passport from 'passport';

const router = Router();
router.use(passport.authenticate('jwt', { session: false }));
const accessLogController = new BaseCRUD(AccessLog);

router.get('/', accessLogController.all);
router.post('/', accessLogController.save);
router.put('/:id', accessLogController.save);

export default router;
