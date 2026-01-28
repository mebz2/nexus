const express = require('express');
const router = express.Router();

// @route   POST api/auth/signup
// @desc    Register user
// @access  Public
router.post('/signup', (req, res) => {
	res.json({ msg: 'Signup route' });
});

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', (req, res) => {
	res.json({ msg: 'Login route' });
});

// @route   GET api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', (req, res) => {
	res.json({ msg: 'Get current user route' });
});

module.exports = router;
