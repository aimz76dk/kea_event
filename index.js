const express = require('express');
const app = express();
var path = require('path')
var bodyParser = require('body-parser');
const publicPath = __dirname + '/public'

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('wwwroot'));

app.get('/', function (req, res) {
    res.sendFile(publicPath + '/login.html', function (err) {
        // handle error
    });
});

app.get('/contact', function (req, res) {
    res.sendFile(publicPath + '/contact.html', function (err) {
        // handle error
    });
});

app.get('/about', function (req, res) {
    res.sendFile(publicPath + '/about.html', function (err) {
        // handle error
    });
});

app.get('/login', function(req, res) {
    res.sendFile(publicPath + '/login.html', function (err) {
        // handle error
    });
});

app.post('/login', function(req, res) {
     if (req.body.user === 'admin' || req.body.pass === 'dumkode') {
        res.sendFile(publicPath + '/loggedin.html', function (err) {
            // handle error
        });
    } else {
        res.json({success: false});
    }
});

app.get('/loggedin', function(req, res) {
    res.sendFile(publicPath + '/loggedin.html', function (err) {
        // handle error
    });
});

app.listen(process.env.PORT || 5000);