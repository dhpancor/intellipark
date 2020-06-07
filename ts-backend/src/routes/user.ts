import { Router } from 'express';
import { BaseCRUD } from '../controller/BaseCRUD';
import { User } from '../entity/User';
import * as passport from 'passport';

const router = Router();
router.use(passport.authenticate('jwt', { session: false }));
const userController = new BaseCRUD(User);

router.get('/', userController.all);
router.get('/:id', userController.one);
router.post('/', userController.save);
router.put('/:id', userController.save);
router.delete('/:id', userController.remove);

export default router;
