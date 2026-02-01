const express = require('express');
const router = express.Router();

router.get('/notifications', (req, res) => {
	res.send("get all notifications");
});

router.put('/notifications/:notificationId', (req, res) => {
	res.send(`Mark notification ${req.params.notificationId} as read route`);
});

module.exports = router;
