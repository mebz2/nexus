const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

	admins: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],

	members: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],

}, { timestamps: true });


module.exports = mongoose.model('Group', groupSchema);
