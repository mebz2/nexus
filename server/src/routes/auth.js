const express = require('express');
const checkEmailExists = require("../middleware/checkEmail");
const { login, signup } = require("../controllers/authControllers");
const { fetchUser } = require("../controllers/fetchUser");
const router = express.Router();

router.post('/signup', checkEmailExists, signup);

router.post('/login', login);

router.get('/me', fetchUser);

router.post("/logout", (req, res) => {
	res.clearCookie("userId")
	res.status(200).json({ message: "Logged our successfully" });
})

module.exports = router;
