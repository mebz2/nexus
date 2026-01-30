const express = require('express');
const router = express.Router();
const { updateUsername, updatePassword, deleteAccount } = require('../controllers/settings')


router.patch('/username', updateUsername);

router.patch('/password', updatePassword);

router.delete('/account', deleteAccount);

module.exports = router;
