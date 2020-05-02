const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/',  usersController.findAll);
router.get('/:id', usersController.findOne);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;
