const db = require("../../config/db");
var session = require('express-session');

class AuthRegisterController {
    // [GET] /register
    register(req, res) {
        res.render('auth/register');
    }
    authUserRegister(req, res) {
        res.render('auth/auth_register_username')
    }
}
module.exports = new AuthRegisterController();