const path = require('path');
const morgan = require('morgan');
const route = require('./routes');
const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));


// middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());


// template angine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})