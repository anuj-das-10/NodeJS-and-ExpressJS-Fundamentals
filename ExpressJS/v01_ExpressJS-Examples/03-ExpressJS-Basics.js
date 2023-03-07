const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.status(200).send(`<h1 align="center">WELCOME <br> TO <br> Matrix ADX's Server</h1>`)
})


app.get('/about', (req,res) => {
    res.status(200).send(`<h1 align="center">ABOUT <br> THE <br> Matrix ADX's Server</h1>`)
})


// Default Behaviour.
// It handles all the GET requests other than those which have been explicitly defined
app.all('*', (req,res) => {
    res.status(404).send('<h1 align="center">404: Resource Not Found</h1>')
})


app.listen(5000, () => {
    console.log('Server is listening to Port: 5000');
})

// app.get()
// app.post()
// app.put()
// app.delete()
// app.listen()
// app.use()
// app.all()
