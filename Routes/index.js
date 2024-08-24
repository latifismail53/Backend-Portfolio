const router = require("express").Router();

// define routes profile
const profileroutes = require("./ProfileRoutes");
const skilsroutes = require("./SkillsRoutes");
const sosmedroutes = require("./SosmedRoutes");

// export router
router.use("/v1", profileroutes);
router.use("/v1", skilsroutes);
router.use("/v1", sosmedroutes);

module.exports = router;
