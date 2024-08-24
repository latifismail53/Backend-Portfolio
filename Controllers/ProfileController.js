// define profile model
const Profile = require("../Models/ProfileModel");

// get profile
const getAllProfile = async (req, res) => {
  try {
    const profile = await Profile.findAll();
    res.json({ profile });
  } catch (error) {
    console.log(error);
  }
};

// get profile by id
const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json({ data: profile.dataValues });
  } catch (error) {
    console.log(error);
  }
};

const createProfile = async (req, res) => {
  try {
    await Profile.create(req.body);
    res.json({ msg: "Profile Created", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

const updateProfile = async (req, res) => {
  try {
    // if id not found
    const CheckProfile = await Profile.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!CheckProfile) {
      return res.json({ msg: "Profile Not Found", code: 404 });
    }

    await Profile.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.json({ msg: "Profile Updated Successfully", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

const deleteProfile = async (req, res) => {
  try {
    // if id not found
    const CheckProfile = await Profile.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!CheckProfile) {
      return res.json({ msg: "Profile Not Found", code: 404 });
    }

    await Profile.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Profile Deleted", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

module.exports = {
  getAllProfile,
  createProfile,
  getProfileById,
  updateProfile,
  deleteProfile,
};
