const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
	res.send("User list")
})
router.get('/new', (req, res) => {
	res.send("User form ")
})
router.post('/', (req, res) => {
	res.send("Create new user")
})


router
	.route('/:id')
	.get((req, res) => {
		res.send(`Get user with id ${req.params.id}`)
	})
	.put((req, res) => {
		res.send(`Update user with id ${req.params.id}`)
	})
	.delete((req, res) => {
		res.send(`Delete user with id ${req.params.id}`)
	})

router.param("id", (req, res, next, id) => {
	console.log(id)
	next()
})

module.exports = router
