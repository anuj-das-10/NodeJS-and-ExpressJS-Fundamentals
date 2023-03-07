const http = require('http');
const { readFileSync } = require('fs');

let reloadCounter = 0
const server = http.createServer((req,res)=>{
    console.log(`User with ${req.method} Request`);
    console.log("User hits the server --- GGWP!!");


if (req.url === "/" || req.url === '/home') {
    const homePage = readFileSync('../index.html')

//  res.writeHead(200, {'content-type': 'text/plain'});            // MIME Type setup
    res.writeHead(200, {'content-type': 'text/html'})  
   
    reloadCounter++

    res.write(homePage);
    res.write(`<h2 align="center">Home Page Reload Count: ${reloadCounter}</h2>`);

    res.end();              // response.end() is mandatory for each request  
}
else if (req.url === '/about') {
    const aboutPage = readFileSync('../about.html')
    
    res.writeHead(200, {'content-type': 'text/html'})  
    res.write(aboutPage);
    
    res.end();
}
else {
    const custom404Page = readFileSync('../404_custom.html')

    res.writeHead(404, {'content-type': 'text/html'})

    res.end(custom404Page);
}

})
server.listen(5000)