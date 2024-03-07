const skills = [
    {id: 100000, skill: 'JavaScript', opinion: true},
    {id: 100001, skill: 'HTML', opinion: true},
    {id: 100002, skill: 'CSS', opinion: false},
    {id: 100003, skill: 'Express', opinion: false}
]

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    return skill
}

function create(skill) {
    //Add an ID
    skill.id = Date.now() % 1000000
    skill.opinion = false
    skills.push(skill)
}

module.exports = {
    getAll,
    getOne,
    create
}