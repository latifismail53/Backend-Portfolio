const express = require("express");
const router = express.Router();
const workController = require("../Controllers/WorkController");

// define routes
router.get("/work", workController.getAllWork);
router.get("/work/:id", workController.getWorkById);
router.post("/work", workController.createWork);
router.patch("/work/:id", workController.updateWork);
router.delete("/work/:id", workController.deleteWork);

module.exports = router;
