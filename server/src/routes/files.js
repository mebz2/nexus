const express = require('express');
const router = express.Router();

// -- Group Files --

// @route   GET api/groups/:groupId/files
// @desc    Get all files for a specific group
// @access  Private
router.get('/groups/:groupId/files', (req, res) => {
	res.send(`Get all files for group ${req.params.groupId} route`);
});

// @route   POST api/groups/:groupId/files
// @desc    Upload a new file to a group
// @access  Private
router.post('/groups/:groupId/files', (req, res) => {
	res.send(`Upload file to group ${req.params.groupId} route`);
});


// -- Personal Files --

// @route   GET api/files/personal
// @desc    Get all personal files for the logged-in user
// @access  Private
router.get('/files/personal', (req, res) => {
	res.send('Get all personal files route');
});

// @route   POST api/files/personal
// @desc    Upload a new personal file
// @access  Private
router.post('/files/personal', (req, res) => {
	res.send('Upload personal file route');
});


// -- General File Operations --

// @route   DELETE api/files/:fileId
// @desc    Delete a specific file (works for both personal and group files)
// @access  Private
router.delete('/files/:fileId', (req, res) => {
	res.send(`Delete file ${req.params.fileId} route`);
});

module.exports = router;
