import { Router } from 'express';
import { BaseCRUD } from '../controller/BaseCRUD';
import { Client } from '../entity/Client';

const router = Router();
const clientsController = new BaseCRUD(Client);

router.get('/', clientsController.all);
router.get('/:id', clientsController.one);
router.post('/', clientsController.save);
router.put('/:id', clientsController.save);
router.delete('/:id', clientsController.remove);

export default router;
