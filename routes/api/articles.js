var router = require("express").Router();
var articleController = require("../../controllers/article");

router.get("/", articleController.findAll);
router.delete("/:id", articleController.delete);
router.put("/:id", articleController.update);

module.exports = router;
