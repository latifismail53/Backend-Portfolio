const router = require("express").Router();

// define routes profile
const profileroutes = require("./ProfileRoutes");
const skilsroutes = require("./SkillsRoutes");
const sosmedroutes = require("./SosmedRoutes");
const workroutes = require("./WorkRoutes");

// export router
// base url /

router.use("/v1", profileroutes);
router.use("/v1", skilsroutes);
router.use("/v1", sosmedroutes);
router.use("/v1", workroutes);

module.exports = router;
