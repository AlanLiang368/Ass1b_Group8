const {ArticleModel} = require("./articles.model");

class ArticlesService {
  constructor() {}

  async removeArticle(article_id) {
    return ArticleModel.findByIdAndDelete(article_id);
  }

  async getArticles(page = 1, pageSize = 10) {
    let skip = (page - 1) * pageSize;
    return ArticleModel.find();
  }

  async createArticle(article) {
    return ArticleModel.create(article);
  }
}

module.exports = {
  ArticlesService: new ArticlesService()
}