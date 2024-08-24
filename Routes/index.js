// define express router
const express = require("express");
const router = express.Router();

// define routes profile
const profileroutes = require("./ProfileRoutes");
const skilsroutes = require("./SkillsRoutes");

// export router
router.use("/v1", profileroutes);
router.use("/v1", skilsroutes);

module.exports = router;
