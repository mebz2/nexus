const User = require("../models/User");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const hashedPassword = await bcrypt.hash(password, 10);

		await User.create({ username, email, password: hashedPassword });

		res.status(201).json({ message: "User created successfully" });
	} catch (err) {
		console.error("Signup error", err);

		if (err.code === 11000) {
			return res.status(409).json({
				message: "Email already exists"
			});
		}

		res.status(500).json({
			message: "Signup failed",
		});
	}
}

module.exports = {
	signup,
};
