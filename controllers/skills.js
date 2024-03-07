const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.skillsId),
        title: 'Skill Details'
    })
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'New Skill'
    })
}

function create(req, res) {
    console.log(req.body)
    Skill.create(req.body)
    res.redirect('/skills')
}

module.exports = {
    index,
    show,
    new: newSkill,
    create
}