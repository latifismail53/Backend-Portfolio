const SkillModel = require("../Models/SkillModel");

// get skill
const getAllSkill = async (req, res) => {
  try {
    const skill = await SkillModel.findAll();
    res.json({ skill });
  } catch (error) {
    console.log(error);
  }
};

// create skills
const createSkills = async (req, res) => {
  try {
    await SkillModel.create(req.body);
    res.json({ msg: "Skills Created", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

// Update Skills
const updateSkills = async (req, res) => {
  try {
    // if id not found
    const CheckSkill = await SkillModel.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!CheckSkill) {
      return res.json({ msg: "Skill ID Not Found", code: 404 });
    }

    await SkillModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.json({ msg: "Skill Updated Successfully", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

// Delete Skills
const deleteSkills = async (req, res) => {
  try {
    // if id not found
    const CheckSkill = await SkillModel.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!CheckSkill) {
      return res.json({ msg: "Skill ID Not Found", code: 404 });
    }

    await SkillModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Skill Deleted", code: 201 });
  } catch (error) {
    res.json({ msg: error.message, code: 500 });
  }
};

module.exports = {
  getAllSkill,
  createSkills,
  updateSkills,
  deleteSkills,
};
