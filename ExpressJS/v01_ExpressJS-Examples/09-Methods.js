// http://localhost:5000/index.html

const express = require('express')
const app = express()
let { people } = require('../data')

// Static Assets
app.use(express.static('../v03_Methods-Public'))
// Parse form data
app.use(express.urlencoded({ extended: false }))
// Parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide name value!' })
  }
  res.status(201).json({ success: true, person: name })
})

app.post('/api/people/postman', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide name value!' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`<h1 align="center">Welcome ${name}!!</h1>`)
  }
  res.status(401).send('<h3 align="center">Please Provide Credentials</h3>')
})

app.put('/api/people/:id', (req, res) => {
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
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on Port: 5000')
})