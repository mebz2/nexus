require('dotenv').config();
console.log(`My uri is: ${process.env.MONGO_URI}`);
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const connectDB = require('./config/db');

// initialize app
const app = express();

// connect to database
connectDB();

// Use CORS middleware to allow requests from the client
app.use(cors({
	origin: 'http://localhost:5173', // Adjust port if your client runs on a different one
	credentials: true
}));

// Middleware for parsing JSON bodies
app.use(express.json());

//Middleware for parsing cookiesa
app.use(cookieParser());

// routes
const authRouter = require('./routes/auth.js');
const groupsRouter = require('./routes/groups.js');
const filesRouter = require('./routes/files.js');
const notificationsRouter = require('./routes/notifications.js'); // Import the new notifications router
const settingsRouter = require('./routes/settings.js');

app.use('/api/auth', authRouter);
app.use('/api/groups', groupsRouter);
app.use('/api/settings', settingsRouter);
app.use('/api', filesRouter);
app.use('/api', notificationsRouter);

app.get('/', (req, res) => {
	res.send("API is running")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server ready at http://localhost:${PORT}`);
})
