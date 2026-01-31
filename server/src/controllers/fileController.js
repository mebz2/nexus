const File = require('../models/File');
const mongoose = require('mongoose')

const fetchArchive = async (req, res) => {
	try {
		const userId = new mongoose.Types.ObjectId(req.cookies.userId);
		if (!userId) {
			return res.status(401).json({ message: 'Not authenticated' });
		}

		const files = await File.find({
			uploader: userId,
			storageType: 'personal'
		}).populate('uploader', 'username').sort({ createdAt: -1 });

		res.status(200).json(files);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Server error' });
	}
};

const deleteFile = async (req, res) => {
	try {
		const { id } = req.params;
		const userId = req.cookies.userId;

		if (!userId) {
			return res.status(401).json({ message: 'Not authenticated' });
		}

		// Find the file that matches the ID AND the uploader's ID
		// This prevents users from deleting files they don't own
		const file = await File.findOneAndDelete({
			_id: id,
			uploader: userId
		});

		if (!file) {
			return res.status(404).json({ message: 'File not found or unauthorized' });
		}

		res.status(200).json({ message: 'File deleted successfully', fileId: id });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = { fetchArchive, deleteFile };
