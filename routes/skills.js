var express = require('express')
var router = express.Router()
var skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index)

router.get('/:skillsId', skillsCtrl.show)

module.exports = router