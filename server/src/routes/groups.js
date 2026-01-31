const express = require("express");
const router = express.Router();
const {
  createGroup,
  fetchGroups,
  fetchGroupData,
} = require("../controllers/groupControllers");

router.get("/", (req, res) => {
  res.send("Get all groups route");
});

router.post("/create", createGroup);

router.get("/me", fetchGroups);

router.get("/:groupId", fetchGroupData);

router.put("/:groupId", (req, res) => {
  res.send(`Update group ${req.params.groupId} details route`);
});

router.delete("/:groupId", (req, res) => {
  res.send(`Delete group ${req.params.groupId} route`);
});

module.exports = router;
