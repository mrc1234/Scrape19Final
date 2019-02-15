// ------------------------------------------------------------------------- setup/vars

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});



const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
