const Group = require("../models/Group");
const mongoose = require("mongoose");

const createGroup = async (req, res) => {
  try {
    const { name, description } = req.body;
    const userId = new mongoose.Types.ObjectId(req.cookies.userId);

    if (!userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const newGroup = await Group.create({
      name: name,
      description: description,
      creator: userId,
      admins: [userId],
      members: [userId],
    });
    return res.status(201).json(newGroup);
  } catch (err) {
    return res.status(500).json({ message: "Error creating group" });
  }
};

const fetchGroups = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.cookies.userId);

    if (!userId) return res.status(401).json({ message: "Not authenticated" });

    const groups = await Group.find({ members: userId });

    return res.status(200).json(groups);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error fetching user groups" });
  }
};

const fetchGroupData = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.cookies.userId);

    if (!userId) return res.status(401).json({ message: "Not authenticated" });

    const { groupId } = req.params;

    const group = await Group.findById(groupId);

    return res.status(200).json(group);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createGroup,
  fetchGroups,
  fetchGroupData,
};
