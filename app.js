var express = require('express'),
    exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(process.cwd() + '/public'));
app.use('/vendor', express.static(__dirname + '/bower_components'));


app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);

module.exports = app;
