const db = require("../../config/db");
const session = require('express-session');
const bcrypt = require('bcryptjs');
var md5 = require('md5');
class AuthLoginController {
    // [GET] /login
    login(req, res) {
            res.render('auth/login');
        }
        // [GET]/login/auth/user
    authUserLogin(req, res) {
            res.render('auth/auth_login_username');
        }
        //[POST]/login/auth/user
    handlingLogin(req, res) {
        const { username, password } = req.body;
        const hashPassword = md5(password);
        console.log(hashPassword);
        if (username && hashPassword) {
            db.query(`select * from users where username = '${username}' and password = '${hashPassword}'`, (error, results) => {
                if (results.length <= 0) {
                    return res.render('auth/auth_login_username', {
                        message: 'Thông tin đăng nhập không chính xác'
                    })
                } else {
                    return res.render('home');
                }
            });
        }
    }
}
module.exports = new AuthLoginController();