var path = require('path');
var express = require('express');
var helmet = require('helmet');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

var publicPath = path.resolve(__dirname, 'public');

app
    .use(helmet())

    .set('view engine', 'ejs')
    .use(express.static(publicPath))

    .get('*', function (req, res) {
        res.render('index');
    })

    .listen(port, function () {
        console.log('App listening at http://localhost:' + port);
    });
