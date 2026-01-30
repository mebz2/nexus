const express = require('express');
const checkEmailExists = require("../middleware/checkEmail");
const { signup } = require("../controllers/signup");
const { login } = require("../controllers/login");
const { fetchUser } = require("../controllers/fetchUser");
const router = express.Router();

// @route   POST api/auth/signup
// @desc    Register user
// @access  Public
router.post('/signup', checkEmailExists, signup);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', login);

// @route   GET api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', fetchUser);

router.post("/logout", (req, res) => {
	res.clearCookie("userId")
	res.status(200).json({ message: "Logged our successfully" });
})

module.exports = router;
