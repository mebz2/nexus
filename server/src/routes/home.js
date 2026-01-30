const authMiddleware = require("../middleware/authMiddleWare");
const express = require('express');
const router = express.Router();


router.get("/home", authMiddleware, async (req, res) => {
	const user = await User.findById(req.userId).select("-password"); // fetch user information but exclude password
	res.json({ user });
});
