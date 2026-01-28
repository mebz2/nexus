const express = require('express');
const router = express.Router();

// @route   GET api/notifications
// @desc    Get all notifications for the current user
// @access  Private
router.get('/notifications', (req, res) => {
	res.send("get all notifications");
});

// @route   PUT api/notifications/:notificationId
// @desc    Mark a notification as read
// @access  Private
router.put('/notifications/:notificationId', (req, res) => {
	res.send(`Mark notification ${req.params.notificationId} as read route`);
});

module.exports = router;
