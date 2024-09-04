const express = require("express");
const router = express.Router();
const LinkController = require("../Controllers/Links");
const Link = require("../Models/Linkmodel"); // Pastikan model Anda benar

router.get("/1", LinkController.getLinks);

// delete
router.get("/delete/:id", LinkController.deleteLink);

// Route untuk menangani pengiriman form dan menyimpan link ke database
router.post("/create-link", LinkController.createLink);

// Route untuk menangani redirect berdasarkan nama yang diambil dari database
router.get("/:name", async (req, res) => {
  try {
    const name = req.params.name; // Tangkap parameter nama dari URL
    const linkEntry = await Link.findOne({
      where: {
        name: name,
      },
    });

    if (linkEntry) {
      // Redirect ke URL yang ditemukan
      res.redirect(linkEntry.url);
    } else {
      // Jika tidak ditemukan, kirimkan 404 Not Found
      res.status(404).send("Link not found");
    }
  } catch (error) {
    console.error("Error fetching link from database:", error);
    res.status(500).send("An error occurred while processing your request.");
  }
});

module.exports = router;
