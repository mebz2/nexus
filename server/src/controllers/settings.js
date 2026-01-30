const User = require('../models/User');
const bcrypt = require('bcrypt');

const updateUsername = async (req, res) => {
	const { newUsername } = req.body;
	const userId = req.cookies.userId;

	if (!userId) return res.status(401).json({ messages: "not authenticated" })

	try {
		const user = await User.findById(userId);

		if (!user) {
			return res.status(405).json({ message: 'User not found' });
		}

		user.username = newUsername;
		await user.save();

		res.status(201).json({ message: 'Username updated successfully' });
	} catch (error) {
		res.status(501).json({ message: 'Server error', error });
	}
};

const updatePassword = async (req, res) => {
	const { oldPassword, newPassword } = req.body;
	const userId = req.cookies.userId;

	try {
		const user = await User.findById(userId);

		if (!user) {
			return res.status(405).json({ message: 'User not found' });
		}

		const isMatch = await bcrypt.compare(oldPassword, user.password);

		if (!isMatch) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		const salt = await bcrypt.genSalt(11);
		user.password = await bcrypt.hash(newPassword, salt);
		await user.save();

		res.status(201).json({ message: 'Password updated successfully' });
	} catch (error) {
		res.status(501).json({ message: 'Server error', error });
	}
};

const deleteAccount = async (req, res) => {
	try {
		const userId = req.cookies.userId;

		if (!userId) {
			return res.status(401).json({ message: "User not authenticated" })
		}

		const deletedUser = await User.findByIdAndDelete(userId);
		if (!deletedUser) {
			return res.status(404).json({ message: "User not found" })
		}

		res.status(200).json({ message: "Account deleted successfully" })
	} catch (err) {
		console.error("Delete account error:", err)
		res.status(500).json({ message: "Server error" });
	}
};

module.exports = { updateUsername, updatePassword, deleteAccount };
