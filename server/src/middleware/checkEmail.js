const User = require("../models/User");

const checkEmailExists = async (req, res, next) => {
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });

		if (user) {
			return res.status(409).json({
				message: "Email already exists",
			});
		}

		next();
	} catch (error) {
		console.error("Email check error", error);
		res.status(500).json({ message: "Server error" });
	}
}

module.exports = checkEmailExists;
