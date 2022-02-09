const db = require("../../config/db");
var session = require('express-session');

class AuthLoginController {
    // [GET] /login
    login(req, res) {
            res.render('layouts/auth/login');
        }
        // [GET]/login/auth/user
    authUserLogin(req, res) {
            res.render('layouts/auth/auth_login_username');
        }
        //[POST]/login/auth/user
    handlingLogin(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        if (username && password) {
            db.query('select * from user where username = ? and password = ?', [username, password], function(error, results, fields) {
                if (results.length > 0) {
                    // req.session.loggedin = true;
                    // req.session.username = username;
                    res.redirect('/home');
                } else {
                    return res.redirect('/login/auth/user');
                }
                res.end();
            });
        }
    }
}
module.exports = new AuthLoginController();