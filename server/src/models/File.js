const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
	fileName: {
		type: String,
		required: true,
		trim: true
	},
	fileSizeB: {
		type: Number,
		required: true
	},
	fileType: {
		type: String,
		required: true
	},
	uploader: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	storageType: {
		type: String,
		enum: ['personal', 'group'],
		required: true
	},
	groupId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Group',
		default: null
	},
	fileUrl: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('File', fileSchema);
