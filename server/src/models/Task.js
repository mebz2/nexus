const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	isCompleted: {
		type: Boolean,
		default: false
	},
	// The group this task belongs to
	group: {
		type: Schema.Types.ObjectId,
		ref: 'Group',
		required: true
	},
	// Optional: Assign the task to a specific member
	assignedTo: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	dueDate: {
		type: Date
	}
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
