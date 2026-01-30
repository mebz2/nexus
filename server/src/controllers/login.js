const User = require("../models/User");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(401).json({
				message: "Invalid credentials"
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(401).json({
				message: "Invalid credentials"
			});
		}

		res.status(200).json({
			message: "Login successfull"
		})
	} catch (err) {
		console.error("Login error: ", err);
		res.status(500).json({ message: "Login failed" });
	}

}

module.exports = {
	login
};

