import { Router } from 'express';
import { BaseCRUD } from '../controller/BaseCRUD';
import { Vehicle } from '../entity/Vehicle';
import * as passport from 'passport';

const router = Router();
router.use(passport.authenticate('jwt', { session: false }));
const vehiclesController = new BaseCRUD(Vehicle);

// CRUD endpoints
router.get('/', vehiclesController.all);
router.get('/:id', vehiclesController.one);
router.post('/', vehiclesController.save);
router.put('/:id', vehiclesController.save);
router.delete('/:id', vehiclesController.remove);

export default router;
