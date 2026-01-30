const User = require("../models/User");

const fetchUser = async (req, res) => {
	const userId = req.cookies.userId; // backend reads the cookie
	if (!userId) {
		return res.status(401).json({ message: "Not logged in" });
	}
	req.userId = userId;

	try {
		const user = await User.findById(req.userId).select("-password"); // fetch user information but exclude password
		if (!user) return res.status(404).json({ message: "User not found" });

		res.json({ user });
		console.log("user found")
	} catch (err) {
		res.status(500).json({ message: "Server error" })
	}


}

module.exports = {
	fetchUser
};
