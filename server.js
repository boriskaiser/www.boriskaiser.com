var express = require('express');

express()
    .disable('x-powered-by')
    .set('view engine', 'ejs')
    .use(express.static('./public'))
    .get('*', function (req, res) {
        res.render('index');
    })
    .listen(3000, function () {
        console.log('App listening at http://localhost:3000');
    });
