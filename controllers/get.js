
var db = require("../models");
var huffPostScrape = require("../scraped-data/scraper");

module.exports = {
  scrapeArticles: function(req, res) {
    
    return huffPostScrape()
      .then(function(articles) {
        
        return db.Article.create(articles);
      })
      .then(function(dbArticle) {
        if (dbArticle.length === 0) {
          res.json({
            message: "We are unable to find your articles."
          });
        }
        else {
      
          res.json({
            message: "Added your new articles!"
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};
