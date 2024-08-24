const router = require("express").Router();
const sosmedController = require("../Controllers/SosmedController");

// get all my sosmed
router.get("/sosmed", sosmedController.getAllSosmed);
// get one my sosmed
router.get("/sosmed/:id", sosmedController.getOneSosmed);
// create my sosmed
router.post("/sosmed", sosmedController.createSosmed);
// update my sosmed
router.patch("/sosmed/:id", sosmedController.updateSosmed);
// delete my sosmed
router.delete("/sosmed/:id", sosmedController.deleteSosmed);

module.exports = router;
