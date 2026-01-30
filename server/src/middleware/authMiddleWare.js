const authMiddleware = (req, res, next) => {
	const userId = req.cookies.userId; // backend reads the cookie
	if (!userId) {
		return res.status(401).json({ message: "Not logged in" });
	}
	req.userId = userId;
	next();
};

module.exports = authMiddleware;
