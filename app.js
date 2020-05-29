var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.set('view engine', 'pug');

var articleRouter = require('./routes/article.router.js')

articleRouter(app)

app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/static-html/404.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
