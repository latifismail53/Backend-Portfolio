// load model
const SosmedModel = require("../Models/SosmedModel");

// get all my sosmed
const getAllSosmed = async (req, res) => {
  try {
    const sosmed = await SosmedModel.findAll();
    res.json({ sosmed });
  } catch (error) {
    console.log(error);
  }
};

// get one my sosmed
const getOneSosmed = async (req, res) => {
  try {
    const sosmed = await SosmedModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json({ sosmed });
  } catch (error) {
    console.log(error);
  }
};

// create my sosmed
const createSosmed = async (req, res) => {
  try {
    await SosmedModel.create(req.body);
    res.json({ msg: "Sosmed Created", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

// update my sosmed
const updateSosmed = async (req, res) => {
  try {
    // if id not found
    const CheckSosmed = await SosmedModel.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!CheckSosmed) {
      return res.json({ msg: "Sosmed ID Not Found", code: 404 });
    }

    await SosmedModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.json({ msg: "Sosmed Updated Successfully", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

// delete my sosmed
const deleteSosmed = async (req, res) => {
  try {
    // if id not found
    const CheckSosmed = await SosmedModel.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!CheckSosmed) {
      return res.json({ msg: "Sosmed ID Not Found", code: 404 });
    }

    await SosmedModel.destroy({ where: { id: req.params.id } });
    res.json({ msg: "Sosmed Deleted", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

module.exports = {
  getAllSosmed,
  getOneSosmed,
  createSosmed,
  updateSosmed,
  deleteSosmed,
};
