import { Router } from 'express';
import { BaseCRUD } from '../controller/BaseCRUD';
import { Vehicle } from '../entity/Vehicle';

const router = Router();
const vehiclesController = new BaseCRUD(Vehicle);

router.get('/', vehiclesController.all);
router.get('/:id', vehiclesController.one);
router.post('/', vehiclesController.save);
router.put('/:id', vehiclesController.save);
router.delete('/:id', vehiclesController.remove);

export default router;
