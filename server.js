var express = require('express'),

app = express(),
port = process.env.PORT || 3000,
bodyParser = require('body-parser');

app.use(express.static('./api/public'));
app.set('view engine', 'ejs');
app.set('views', './api/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');

routes(app);

app.listen(port);

console.log('Message RESTful API server started on: ' + port);