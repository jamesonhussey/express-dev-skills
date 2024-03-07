var express = require('express')
var router = express.Router()
var skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index)

//GET /skills/new <-- Must be above ID so ID doesn't take over
router.get('/new', skillsCtrl.new)

//POST /skills <-- Should this be under IDs?
router.post('/', skillsCtrl.create)

router.get('/:skillsId', skillsCtrl.show)

module.exports = router