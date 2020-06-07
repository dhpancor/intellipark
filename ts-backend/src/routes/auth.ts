import { Router } from 'express';
import { AuthController } from '../controller/AuthController';

const router = Router();

// Specific endpoints
router.post('/login', AuthController.login);
router.delete('/logout', AuthController.logout);

export default router;
