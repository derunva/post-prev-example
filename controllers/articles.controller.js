var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.edit_article = function (req, res) {
  var options =  {
    title: 'форма',
    method: "POST",
    action: '/articles'
  }
  res.render('form-page', options);
}

exports.list = function (req, res) {
  Article.find({}, function (err, list) {
    if (err) return console.error(err);
    res.render('list.pug', { list })
  })
}

exports.create_article = function (req, res) {

  var article = new Article(req.body);
  article.save(function (err, article) {
    if (err) return console.error(err);
    var options =  {
      title: article.title,
      article: article
    }
    res.render('form-results', options);
  });
}
