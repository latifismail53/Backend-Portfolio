// define profile model
const Work = require("../Models/WorkModel");

// get Work
const getAllWork = async (req, res) => {
  try {
    const work = await Work.findAll();
    if (!work) {
      return res.status(404).json({ msg: "Work Not Found" });
    }
    res.json({ work });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

// get work by id
const getWorkById = async (req, res) => {
  try {
    const work = await Work.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json({ data: work.dataValues });
  } catch (error) {
    console.log(error);
  }
};

// create work
const createWork = async (req, res) => {
  try {
    await Work.create(req.body);
    res.json({ msg: "Work Created", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

// update work
const updateWork = async (req, res) => {
  try {
    // if id not found
    const CheckWork = await Work.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!CheckWork) {
      return res.json({ msg: "Work Not Found", code: 404 });
    }

    await Work.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.json({ msg: "Work Updated Successfully", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

// delete work
const deleteWork = async (req, res) => {
  try {
    // if id not found
    const CheckWork = await Work.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!CheckWork) {
      return res.json({ msg: "Work Not Found", code: 404 });
    }

    await Work.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Work Deleted", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

module.exports = {
  getAllWork,
  getWorkById,
  createWork,
  updateWork,
  deleteWork,
};
