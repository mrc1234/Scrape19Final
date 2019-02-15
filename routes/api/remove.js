var router = require("express").Router();
var removeController = require("../../controllers/remove");

router.get("/", removeController.clearDB);

module.exports = router;
