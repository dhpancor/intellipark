import { Router } from 'express';
import { ClientsController } from '../controller/ClientsController';

const router = Router();
const clientsController = new ClientsController();

// CRUD methods
router.get('/', clientsController.all);
router.get('/:id', clientsController.one);
router.post('/', clientsController.save);
router.put('/:id', clientsController.save);
router.delete('/:id', clientsController.remove);

// Specific methods
router.get('/:id/accesses', clientsController.getLastAccesses);

export default router;
