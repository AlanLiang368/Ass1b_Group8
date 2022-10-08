const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String
  },
  source: {
    type: String,
    required: true
  },
  publishYear: {
    type: Number,
    required: true
  },
  doi: {
    type: String,
  },
  sePractice: {
    type: String
  }
});

module.exports = {
  ArticleModel: mongoose.model("Article", ArticleSchema)
}