const express = require('express');
const checkEmailExists = require("../middleware/checkEmail");
const { signup } = require("../controllers/signup");
const { login } = require("../controllers/login");
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
router.get('/me', (req, res) => {
	res.json({ message: "Get me" });
});

module.exports = router;
