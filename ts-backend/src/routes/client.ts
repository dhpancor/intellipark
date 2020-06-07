import { Router } from 'express';
import { ClientsController } from '../controller/ClientsController';
import * as passport from 'passport';

const router = Router();
router.use(passport.authenticate('jwt', { session: false }));
const clientsController = new ClientsController();

// Specific methods
router.get('/:id/accesses', clientsController.getLastAccesses);
router.get('/:id/stats/accessPerVehicle', clientsController.getAccessesPerVehicle);
router.get('/:id/stats/lastTenVisitsTimeSpent', clientsController.lastTenVisitsTimeSpent);

// CRUD methods
router.get('/', clientsController.all);
router.get('/:id', clientsController.one);
router.post('/', clientsController.save);
router.put('/:id', clientsController.save);
router.delete('/:id', clientsController.remove);

export default router;
