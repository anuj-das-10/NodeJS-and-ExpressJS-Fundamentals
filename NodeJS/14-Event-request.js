const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it

server.on('request', (req, res) => {
  if(req.url === "/home" || req.url === "/") {
    res.end('Welcome to our HOME Server!')
  }
  else if(req.url === "/about"){
    res.end(`ABOUT Matrix ADX's Server!`)
  }
  else {
    res.end(`404! Page Not Found
    GGWP!!`)
  }

})

server.listen(5000)