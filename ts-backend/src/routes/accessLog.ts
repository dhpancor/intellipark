import { Router } from 'express';
import * as passport from 'passport';
import { AccessLogController } from '../controller/AccessLogController';

const router = Router();
router.use(passport.authenticate('jwt', { session: false }));
const accessLogController = new AccessLogController();

// Specific endpoints
router.get('/stats/averageTimeSpentByGender', accessLogController.averageTimeSpentByGender);
router.get('/stats/averageBusyHours', accessLogController.averageBusyHours);
router.get('/stats/yearlyAccessesPerDay', accessLogController.yearlyAccessesPerDay);
router.get('/stats/todayStats', accessLogController.todayStats);

// CRUD endpoints
router.get('/', accessLogController.all);
router.post('/', accessLogController.save);
router.put('/:id', accessLogController.save);

export default router;
