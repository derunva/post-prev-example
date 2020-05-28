var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  var options =  {
    title: 'форма',
    method: "POST",
    action: '/articles'
  }
  res.render('form-page', options);
});

app.get('/articles', function (req, res) {
  res.send('/articles')
})

app.post('/articles', function (req, res) {
  console.log(req, '==========================================');
  res.send('POST /articles')
})

// app.use(function(req, res, next) {
//   res.status(404).sendFile(__dirname + '/static-html/404.html');
// });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
