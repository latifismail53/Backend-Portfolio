const router = require("express").Router();

// define routes profile
const profileroutes = require("./ProfileRoutes");
const skilsroutes = require("./SkillsRoutes");
const sosmedroutes = require("./SosmedRoutes");
const workroutes = require("./WorkRoutes");
const linkroutes = require("./LinkRoutes");

// export router
// base url /

router.use("/v1", profileroutes);
router.use("/v1", skilsroutes);
router.use("/v1", sosmedroutes);
router.use("/v1", workroutes);
router.use("/ft", linkroutes);

// redirect to google
router.get("/lemsepatu", (req, res) => {
  res.redirect("https://s.shopee.co.id/1B3Is1wnyq");
});

router.get("/cobain", (req, res) => {
  res.redirect("https://s.shopee.co.id/6AS25BwoYy");
});

module.exports = router;
