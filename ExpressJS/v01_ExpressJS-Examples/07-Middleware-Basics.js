// MIDDLEWARE Basics!
const express = require('express');
const app = express();

//      req  =>  middleware  =>  res

// Function acts as middleware
const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    next();
}


// app.get('/', logger, (req,res) => {
//     res.send(`HOME Page!`);
// })
// app.get('/about', logger, (req,res) => {
//     res.send(`ABOUT Page!`);
// })
// app.get('/api/products', logger, (req,res) => {
//     res.send(`PRODUCTS Page!`);
// })
// app.get('/api/items', logger, (req,res) => {
//     res.send(`ITEMS Page!`);
// })


// Instead of passing middleware in every function we use app.use()
app.use(logger);                

app.get('/', (req,res) => {
    res.send(`HOME Page!`);
})
app.get('/about', (req,res) => {
    res.send(`ABOUT Page!`);
})
app.get('/api/products', (req,res) => {
    res.send(`PRODUCTS Page!`);
})
app.get('/api/items', (req,res) => {
    res.send(`ITEMS Page!`);
})



app.listen(5000, () => {
    console.log(`Server is listening to Port:  5000`);
})