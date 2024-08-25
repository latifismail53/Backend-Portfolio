// define profile model
const Profile = require("../Models/ProfileModel");
const Skilss = require("../Models/SkillModel");

// get profile
const getAllData = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    const skils = await Skilss.findAll();
    if (!profile) {
      return res.status(404).json({ msg: "Profile Not Found" });
    }

    // select data in profile
    const {
      name,
      initials,
      url,
      location,
      locationLink,
      description,
      summary,
      avatarUrl,
    } = profile.dataValues;

    const response = {
      name,
      initials,
      url,
      location,
      locationLink,
      description,
      summary,
      avatarUrl,
      skils: skils.map((skil) => skil.dataValues),
      navbar: [
        { href: "/", icon: "HomeIcon", label: "Home" },
        { href: "/blog", icon: "NotebookIcon", label: "Blog" },
      ],
    };

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllData,
};
