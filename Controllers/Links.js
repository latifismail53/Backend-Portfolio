// import model links
const Link = require("../Models/Linkmodel");
const nameView = "link_view";
const LinkController = {
  // get all links and render view
  getLinks: async (req, res) => {
    try {
      const links = await Link.findAll();
      res.render(nameView, { links, message: req.query.message }); // Render the 'links' view with data
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error brow!");
    }
  },

  // delete link
  deleteLink: async (req, res) => {
    try {
      const link = await Link.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!link) {
        return res.status(404).json({ msg: "Link Not Found" });
      }

      await Link.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (result) {
        // Jika berhasil dihapus, redirect ke base URL dengan pesan
        res.redirect("/ft/1?message=Link berhasil dihapus");
      } else {
        // Jika ID tidak ditemukan, kirim respons 404
        res.status(404).send("Link not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error brow!");
    }
  },

  // create link
  createLink: async (req, res) => {
    try {
      const { name, link } = req.body;
      console.log(req.params.name);

      // Validasi input (jika diperlukan)
      if (!name || !link) {
        res.redirect("/ft/1?message=Semua kolom harus diisi");
        return;
      }

      // Simpan data ke database
      await Link.create({ name, link });

      if (!link) {
        return res.status(404).json({ msg: "Link Not Found" });
      }
      res.redirect("/ft/1?message=Link berhasil ditambahkan");
    } catch (error) {
      console.log(error);
      res.redirect("/ft/1?message=Server Error brow!");
    }
  },
};

module.exports = LinkController;
