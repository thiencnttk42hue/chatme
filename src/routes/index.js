const siteRouter = require('./site');
const authLoginRouter = require('./authLogin');
const authRegisterRouter = require('./authRegister');

function route(app) {
    app.use('/login', authLoginRouter);

    app.use('/register', authRegisterRouter);

    app.use('/', siteRouter);
}
module.exports = route;