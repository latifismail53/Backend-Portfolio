const router = require("express").Router();
const skillsController = require("../Controllers/SkillsController");

router.get("/skills", skillsController.getAllSkill);
router.post("/skills", skillsController.createSkills);
router.patch("/skills/:id", skillsController.updateSkills);
router.delete("/skills/:id", skillsController.deleteSkills);

module.exports = router;
