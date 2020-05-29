module.exports = function (app) {
  var articleController = require('../controllers/articles.controller.js')

  app.get('/', articleController.edit_article);

  app.get('/articles', articleController.list)


  app.post('/articles', articleController.create_article);
}
