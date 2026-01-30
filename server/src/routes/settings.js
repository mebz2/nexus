const express = require('express');
const router = express.Router();
const { updateUsername, /* updatePassword  */ } = require('../controllers/settings')


// @route   PUT api/settings/username
// @desc    Update username
// @access  Private
router.patch('/username', updateUsername);

// @route   PUT api/settings/password
// @desc    Update password
// @access  Private
// router.patch('/password', updatePassword);

module.exports = router;
