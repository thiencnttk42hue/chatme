const express = require('express');
const router = express.Router();
const AuthLoginController = require('../app/controllers/AuthLoginController');

router.get('/auth/user', AuthLoginController.authUserLogin);
router.post('/auth/user', AuthLoginController.handlingLogin);
router.get('/', AuthLoginController.login);

module.exports = router;