
const connectDB = require('../../config/db');
const mongoose = require("mongoose");
const {ArticlesService} = require("../../modules/articles/articles.service");
beforeAll(() => {
  connectDB();
});
afterAll(() => {
  mongoose.connection.close();
})

it("Test create article service", async () => {
  const newArticle = {
    title: 'test title',
    authors: 'test authors',
    source: 'test source',
    publishYear: 2022,
    doi: 'test doi',
    sePractice: 'test se practice'
  };

  const article = await ArticlesService.createArticle(newArticle);
  const articles = await ArticlesService.getArticles();
  const articleIndex = articles.findIndex(item => {
    return (
      item.title === newArticle.title &&
        item.authors === newArticle.authors
    )
  });
  console.log(articleIndex)
  expect(articleIndex !== -1).toBe(true);
  await ArticlesService.removeArticle(article._id);
})

