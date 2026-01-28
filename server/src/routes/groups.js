const express = require('express');
const router = express.Router();

// @route   GET api/groups
// @desc    Get all groups for the logged-in user
// @access  Private
router.get('/', (req, res) => {
	res.json({ msg: 'Get all groups route' });
});

// @route   POST api/groups
// @desc    Create a new group
// @access  Private
router.post('/', (req, res) => {
	res.json({ msg: 'Create new group route' });
});

// @route   GET api/groups/:groupId
// @desc    Get detailed information for a specific group
// @access  Private
router.get('/:groupId', (req, res) => {
	res.json({ msg: `Get group ${req.params.groupId} details route` });
});

// @route   PUT api/groups/:groupId
// @desc    Update a group's details
// @access  Private
router.put('/:groupId', (req, res) => {
	res.json({ msg: `Update group ${req.params.groupId} details route` });
});

// @route   DELETE api/groups/:groupId
// @desc    Delete a group
// @access  Private
router.delete('/:groupId', (req, res) => {
	res.json({ msg: `Delete group ${req.params.groupId} route` });
});

module.exports = router;
