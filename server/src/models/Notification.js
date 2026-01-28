const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InboxSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},

	message: {
		type: String,
		required: true
	},

	// The recipient of the notification
	recipient: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
		index: true // Optimized for fetching a user's inbox
	},

	// The group the notification originated from
	group: {
		type: Schema.Types.ObjectId,
		ref: 'Group',
		required: true
	},

	// Distinguishes between 'INVITATION' and 'KICK_NOTICE'
	type: {
		type: String,
		enum: ['INVITATION', 'REMOVAL'],
		required: true
	},

	// Status for invitations (ignored for removals)
	status: {
		type: String,
		enum: ['PENDING', 'ACCEPTED', 'REJECTED', 'NONE'],
		default: 'PENDING'
	},

	isRead: {
		type: Boolean,
		default: false
	},

	createdAt: {
		type: Date,
		default: Date.now,
	}
});

module.exports = mongoose.model('Inbox', InboxSchema);
