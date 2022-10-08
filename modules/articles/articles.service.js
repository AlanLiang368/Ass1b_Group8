const {ArticleModel} = require("./articles.model");

class ArticlesService {
  constructor() {}

  async removeArticle(article_id) {
    return ArticleModel.findByIdAndDelete(article_id);
  }

  async getArticles(page = 1, pageSize = 10, title = '', sePractice = '') {
    return ArticleModel.find({
      title: {
        $regex: new RegExp(`.*${title}.*`)
      },
      sePractice: {
        $regex: new RegExp(`.*${sePractice}.*`)
      }
    });
  }

  async createArticle(article) {
    return ArticleModel.create(article);
  }
}

module.exports = {
  ArticlesService: new ArticlesService()
}