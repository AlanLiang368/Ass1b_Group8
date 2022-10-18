const express = require("express");
const {ArticlesController} = require("./articles.controller");

const router = express.Router();

router.get('', ArticlesController.getArticles);
router.post('', ArticlesController.createArticle);
router.put('', ArticlesController.putArticles);

module.exports = router;