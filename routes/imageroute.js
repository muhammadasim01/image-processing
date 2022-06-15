const router = require("express").Router();
const { imageResizing } = require("../controller/imageController");

router.get("/image/:image/:width/:height", imageResizing);

module.exports = router;
