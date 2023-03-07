const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
      return res.status(200).send(`<h1 align="center">Welcome ${name}!!</h1>`)
    }
    res.status(401).send('<h3 align="center">Please Provide Credentials</h3>')
})

module.exports = router;