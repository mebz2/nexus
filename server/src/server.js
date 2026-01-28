const express = require("express")
const app = express()

// Middleware for parsing JSON bodies
app.use(express.json());

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
