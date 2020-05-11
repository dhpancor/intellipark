const express = require('express');
const router = express.Router();
const accessLogController = require('../controllers/accessLogController');

router.get('/',  accessLogController.findAll);
router.get('/:id', accessLogController.findOne);

module.exports = router;
