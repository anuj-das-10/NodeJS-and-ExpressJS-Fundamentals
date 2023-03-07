const json = require('body-parser/lib/types/json');
const express = require('express');
const { products } = require('./data');
const app = express();

app.get('/', (req,res) => {
    // res.json(products);
    res.send(`<h1 align="center">HOME PAGE</h1>
    <h3 align="center"><a href="/api/products">See Products</a></h3>`)
})


app.get('/api/products', (req,res) => {
    const newProducts = products.map(product => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts);
})

// REQUEST PARAMETERS
app.get('/api/products/:productID', (req,res) => {
//    console.log(req);
//    console.log(req.params);
   const {productID} = req.params;
   const singleProduct = products.find((product) => product.id === Number(productID));
   if(!singleProduct) {
        return res.status(404).send(`<h1>Product doesn't exist.</h1>`)
   }
   return res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res) => {
    //    console.log(req);
        console.log(req.params);
        res.send(`Product is good.`)
    })
    

// QUERY PARAMETERS
app.get('/api/v1/query', (req,res) => {
    console.log(req.query);
    const {search, limit} = req.query;
    let sortedProducts = [...products];
        if(search) {
            sortedProducts = sortedProducts.filter((product) => {
                return product.name.startsWith(search.charAt(0).toUpperCase());
            })
        }
        if(limit) {
            sortedProducts = sortedProducts.slice(0,Number(limit))
        }
        if(sortedProducts.length < 1) {
            res.status(200).send(`No Product matched with the Searched String!`)
        }
        res.json(sortedProducts);
})
    
app.listen(5000, () => {
    console.log(`Server is listening to Port:  5000`);
})