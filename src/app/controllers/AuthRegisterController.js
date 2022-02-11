const db = require("../../config/db");
const session = require('express-session');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var md5 = require('md5');
class AuthRegisterController {
    // [GET] /register
    register(req, res) {
            res.render('auth/register');
        }
        // [GET] /register/auth/user
    authUserRegister(req, res) {
            res.render('auth/auth_register_username')
        }
        // [POST] /register/auth/user
    handlingRegister(req, res) {
        const { name, birthday, sex, username, password, passwords } = req.body;
        db.query('SELECT username FROM users WHERE username = ?', [username], async(error, results) => {
            if (error) {
                console.log(error);
            }
            if (results.length > 0) {
                return res.render('auth/auth_register_username', {
                    message: 'Tên tài khoản đã được sử dụng'
                });
            } else if (password !== passwords) {
                return res.render('auth/auth_register_username', {
                    message: 'Mật khẩu không khớp nhau'
                });
            }
            const hashedPassword = md5(password);
            console.log(hashedPassword);
            // const hashedPassword = await bcrypt.hash(password, 8);

            db.query('INSERT INTO users SET ?', { name: name, birthday: birthday, sex: sex, username: username, password: hashedPassword }, (error, results) => {
                if (error) {
                    console.log(error);
                } else {
                    return res.render('auth/login', {
                        message: 'Tạo tài khoản thành công'
                    });
                }
            })
        });
    }
}
module.exports = new AuthRegisterController();