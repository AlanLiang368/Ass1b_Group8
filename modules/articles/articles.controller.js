const {ArticlesService} = require("./articles.service");
class ArticlesController {
  constructor() {}

  async getArticles(req, res) {
    try {
      const { page, pageSize, title = '', sePractice = '' } = req.query;
      const articles = await ArticlesService.getArticles(page, pageSize, title, sePractice);
      res.status(200).json(articles);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async createArticle(req, res) {
    try {
      const article = req.body;
      await ArticlesService.createArticle(article);
      res.status(201).send();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = {
  ArticlesController: new ArticlesController()
}