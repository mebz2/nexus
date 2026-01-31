const express = require('express');
const router = express.Router();
const { fetchArchive, deleteFile } = require('../controllers/fileController')
const multer = require("multer");
const path = require('path')
const fs = require('fs')

const File = require('../models/File')

const uploadDir = path.join(__dirname, '../uploads')
if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadDir)
	},
	filename: function (req, file, cb) {
		const uniqueSufix = Date.now() + '-' + Math.round(Math.random() * 1e9)
		cb(null, uniqueSufix + '-' + file.originalname)
	}
})

const upload = multer({ storage })

router.post('/files/upload', upload.single('file'), async (req, res) => {
	try {
		if (!req.file) return res.status(400).json({ message: "No file uploaded" })

		const newFile = new File({
			fileName: req.file.originalname,
			fileSizeB: req.file.size,
			fileType: req.file.mimetype,
			uploader: req.body.uploader,
			storageType: req.body.storageType,
			groupId: req.body.groupId || null,
			fileUrl: req.file.path
		})

		await newFile.save()

		res.status(200).json({ message: "File uploaded successfully", file: newFile })
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Server error' })
	}
})

router.get('/files/archive', fetchArchive)

router.delete('/files/delete/:id', deleteFile)

module.exports = router;

