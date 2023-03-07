const express = require('express');
const app = express();
const logger = require('./m01-logger');
const authorize = require('./m02-authorize');
const morgan = require('morgan');


// app.use([authorize, logger]);
app.use(morgan('tiny'))

app.get('/', [logger, authorize] ,(req,res) => {
    res.send(`<h3 align="center">Authorization Successful!</h3>
    <h1 align="center">Welcome ${req.user.name}! <br> to our<br> HOME PAGE!</h1>`);
})
app.get('/about',(req,res) => {
    res.send(`<h1 align="center">ABOUT Page!</h1>`);
})
app.get('/api/products',(req,res) => {
    res.send(`<h1 align="center">PRODUCTS Page!</h1`);
})
app.get('/api/items',(req,res) => {
    res.send(`<h1 align="center">ITEMS Page!</h1>`);
})


app.listen(5000, () => {
    console.log(`Server is Listening to Port: 5000`);
})