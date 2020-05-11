const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehiclesController');

router.get('/',  vehiclesController.findAll);
router.get('/:id', vehiclesController.findOne);
router.post('/', vehiclesController.create);
router.put('/:id', vehiclesController.update);
router.delete('/:id', vehiclesController.delete);

module.exports = router;
