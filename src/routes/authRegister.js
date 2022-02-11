const express = require('express');
const router = express.Router();
const AuthRegisterController = require('../app/controllers/AuthRegisterController');

router.get('/auth/user', AuthRegisterController.authUserRegister);
router.post('/auth/user', AuthRegisterController.handlingRegister);
router.get('/', AuthRegisterController.register);

module.exports = router;