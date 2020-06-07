import { Router } from 'express';
import * as passport from 'passport';
import { UsersController } from '../controller/UsersController';

const router = Router();
router.use(passport.authenticate('jwt', { session: false }));
const userController = new UsersController();

// Specific endpoints
router.get('/whoami', userController.whoAmI);

// CRUD endpoints
router.get('/', userController.all);
router.get('/:id', userController.one);
router.post('/', userController.save);
router.put('/:id', userController.save);
router.delete('/:id', userController.remove);

export default router;
