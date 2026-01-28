const express = require("express")
const app = express()
const cors = require('cors')

// Middleware for parsing JSON bodies
app.use(express.json());

// Use CORS middleware to allow requests from the client
app.use(cors({
	origin: 'http://localhost:5173' // Adjust port if your client runs on a different one
}));

app.get('/', (req, res) => {
	res.send("hello")
})
app.listen(3000)

const userRouter = require('./routes/users.js')
const authRouter = require('./routes/auth.js');
const groupsRouter = require('./routes/groups.js');
const filesRouter = require('./routes/files.js');
const tasksRouter = require('./routes/tasks.js');
const notificationsRouter = require('./routes/notifications.js'); // Import the new notifications router

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter);
app.use('/api/groups', groupsRouter);
app.use('/api', filesRouter);
app.use('/api', tasksRouter);
app.use('/api', notificationsRouter); 
