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

module.exports = { fetchArchive };
