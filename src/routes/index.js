const siteRouter = require('./site');

function route(app) {
    //begin routing

    app.use('/', siteRouter);
    // endrouting
}
module.exports = route;