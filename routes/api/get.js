var router = require("express").Router();
var getController = require("../../controllers/get");

router.get("/", getController.scrapeArticles);

module.exports = router;
