var router = require("express").Router();
var getRoutes = require("./get");
var noteRoutes = require("./notes");
var articleRoutes = require("./articles");
var removeRoutes = require("./remove");

router.use("/get", getRoutes);
router.use("/notes", noteRoutes);
router.use("/articles", articleRoutes);
router.use("/remove", removeRoutes);

module.exports = router;
