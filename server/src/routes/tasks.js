const express = require('express');
const router = express.Router();

// @route   GET api/groups/:groupId/tasks
// @desc    Get all tasks for a specific group
// @access  Private
router.get('/groups/:groupId/tasks', (req, res) => {
  res.json({ msg: `Get all tasks for group ${req.params.groupId} route` });
});

// @route   POST api/groups/:groupId/tasks
// @desc    Create a new task in a group
// @access  Private
router.post('/groups/:groupId/tasks', (req, res) => {
  res.json({ msg: `Create new task in group ${req.params.groupId} route` });
});

// @route   PUT api/tasks/:taskId
// @desc    Update a task
// @access  Private
router.put('/tasks/:taskId', (req, res) => {
  res.json({ msg: `Update task ${req.params.taskId} route` });
});

// @route   DELETE api/tasks/:taskId
// @desc    Delete a task
// @access  Private
router.delete('/tasks/:taskId', (req, res) => {
  res.json({ msg: `Delete task ${req.params.taskId} route` });
});

module.exports = router;
