const express = require('express');
const router = express.Router();
const AuthRegisterController = require('../app/controllers/AuthRegisterController');

router.get('/', AuthRegisterController.register);
router.get('/auth/user', AuthRegisterController.authUserRegister);

module.exports = router;