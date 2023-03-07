let {people} = require('../data');

// get()
const getPerson = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

// post()
const createPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
      return res.status(400).json({ success: false, msg: 'Please provide name value!' })
    }
    res.status(201).json({ success: true, person: name })
}

// post()
const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
      return res.status(400).json({ success: false, msg: 'Please provide name value!' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
}

// put()
const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
  
    const person = people.find((person) => person.id === Number(id))
  
    if (!person) {
      return res.status(404).json({ success: false, msg: `<h1 align="center">No person with ID: ${id}</h1>` })
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople })
}


// delete()
const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res.status(404).json({ success: false, msg: `No Person with ID: ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  }


module.exports = {
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}