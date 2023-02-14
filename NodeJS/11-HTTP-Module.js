// HTTP Built-in Module in JS

const http =  require('http')

// CallBack Function
const server = http.createServer((req,res) => {
    console.log(req);           // Giant Object with lots of info
    if(req.url === '/home' || req.url === '/') {
        res.end("Welcome to our Home Page!!")
    }
    else if(req.url === '/about') {
        res.end("This is the About Page!!")
    }
    else {
    res.end(`
    <h1>404: Page Not Found!</h1>
    <p>Oops! Something went wrong!</p>
    <a href="/"> Go to Home </a>
    `);
    }
})

server.listen(5000)