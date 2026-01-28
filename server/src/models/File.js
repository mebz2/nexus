const fileSchema = new Schema({
	filename: {
		type: String,
		required: true
	},
	originalName: {
		type: String,
		required: true
	},
	sizeKB: {
		type: Number,
		required: true
	},
	mimetype: {
		type: String, // e.g., 'image/png', 'application/pdf'
		required: true
	},
	url: {
		type: String,
		required: true
	},
	uploader: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	// Determines if the file is personal or belongs to a group
	scope: {
		type: String,
		enum: ['user_archive', 'group'],
		required: true
	},
	// Only populated if scope is 'group'
	group: {
		type: Schema.Types.ObjectId,
		ref: 'Group',
		required: function () { return this.scope === 'group'; }
	},
	// Only populated if scope is 'user_archive' (Private file)
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: function () { return this.scope === 'user_archive'; }
	}
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);
