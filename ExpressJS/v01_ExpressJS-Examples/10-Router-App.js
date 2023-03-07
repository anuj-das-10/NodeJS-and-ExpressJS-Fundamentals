const express = require('express')
const app = express()

const people = require('../v04_Routes/people')
const auth = require('../v04_Routes/auth')

// Static Assets
app.use(express.static('./v03_Methods-Public'))
// Parse form data
app.use(express.urlencoded({ extended: false }))
// Parse JSON
app.use(express.json())

// Setting up Base route:  /api/people
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on Port: 5000')
})