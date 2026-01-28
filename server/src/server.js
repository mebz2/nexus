const express = require("express")
const app = express()


app.get('/', (req, res) => {
	res.send("hello")
})
app.listen(3000)

const userRouter = require('./src/routes/users.js')
app.use('/users', userRouter)
