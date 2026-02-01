const express = require("express");
const router = express.Router();
const {
	createGroup,
	fetchGroups,
	fetchGroupData,
	deleteGroup,
	updateGroup
} = require("../controllers/groupControllers");

router.post("/create", createGroup);

router.get("/me", fetchGroups);

router.get("/:groupId", fetchGroupData);

router.delete("/:groupId", deleteGroup);

router.put("/:groupId", updateGroup);
module.exports = router;
