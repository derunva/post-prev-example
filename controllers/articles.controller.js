

exports.edit_article = function (req, res) {
  var options =  {
    title: 'форма',
    method: "POST",
    action: '/articles'
  }
  res.render('form-page', options);
}
exports.create_article = function (req, res) {
  var options =  {
    title: req.body.title,
    article: req.body
  }
  res.render('form-results', options);
}
