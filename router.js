const express = require('express')
const router = express.Router()
const controller = require("./controller")

router.post('/manuals', controller.addManual)
router.get('/manuals', controller.getManuals)
router.get('/manuals/:id', controller.getManual)
router.patch('/manuals/:id', controller.updateManual)
router.delete('/manuals/:id', controller.deleteManual)

module.exports = router