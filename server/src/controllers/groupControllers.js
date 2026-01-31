const Group = require('../models/Group')
const mongoose = require('mongoose')

const createGroup = async (req, res) => {
	try {
		const { name, description } = req.body;
		const userId = new mongoose.Types.ObjectId(req.cookies.userId);

		if (!userId) {
			return res.status(401).json({ message: 'Not authenticated' });
		}

		const newGroup = await Group.create({
			name: name,
			description: description,
			creator: userId,
			members: [userId],
		})
		return res.status(201).json(newGroup);

	} catch (err) {
		return res.status(500).json({ message: "Error creating group" });
	}
};

module.exports = {
	createGroup
}
