const groupSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
		trim: true
	},
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	// Admins are a subset of members who have extra privileges
	admins: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	// All users in the group (including creator and admins)
	members: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	isPrivate: {
		type: Boolean,
		default: false
	}
}, { timestamps: true });

// Index for faster search of groups by name
groupSchema.index({ name: 'text' });

module.exports = mongoose.model('Group', groupSchema);
