const express = require('express');
const router = express.Router();

// @route   POST api/auth/signup
// @desc    Register user
// @access  Public
router.post('/signup', (req, res) => {
	res.send("Singup route");
});

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', (req, res) => {
	res.send("Login route");
});

// @route   GET api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', (req, res) => {
	res.send("Get messages");
});

module.exports = router;
