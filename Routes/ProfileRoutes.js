const express = require("express");
const router = express.Router();
const profileController = require("../Controllers/ProfileController");
const PortfolioController = require("../Controllers/PortfolioController");

// define routes
router.get("/profile", profileController.getAllProfile); // get all profile
router.get("/profile/:id", profileController.getProfileById); // get profile by id
router.post("/profile", profileController.createProfile); // create profile
router.patch("/profile/:id", profileController.updateProfile); // update profile
router.delete("/profile/:id", profileController.deleteProfile); // delete profile

router.get("/data", PortfolioController.getAllData);

module.exports = router;
