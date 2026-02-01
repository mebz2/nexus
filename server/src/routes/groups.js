const express = require("express");
const router = express.Router();
const {
	createGroup,
	fetchGroups,
	fetchGroupData,
	deleteGroup,
} = require("../controllers/groupControllers");

router.post("/create", createGroup);

router.get("/me", fetchGroups);

router.get("/:groupId", fetchGroupData);

router.delete("/:groupId", deleteGroup);

router.put("/:groupId", (req, res) => {
	res.send(`Update group ${req.params.groupId} details route`);
});
module.exports = router;
