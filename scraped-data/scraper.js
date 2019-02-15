var axios = require("axios");
var cheerio = require("cheerio");

const huffPostScrape = function() {
  return axios.get("https://www.huffingtonpost.com/").then(function(response) {
    const $ = cheerio.load(response.data);
    console.log("Scrape successful");
    var articles = [];

    $(".card__headline").each(function(i, e) {
      let title = $(e)
        .children("a")
        .children(".card__headline__text")
        .text();
      const link = $(e)
        .children("a")
        .attr("href");
      // single = {};
      if (title && link) {
        const dataToAdd = {
          title: title,
          link: "https://www.huffingtonpost.com" + link
        };
        
        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

module.exports = huffPostScrape;
