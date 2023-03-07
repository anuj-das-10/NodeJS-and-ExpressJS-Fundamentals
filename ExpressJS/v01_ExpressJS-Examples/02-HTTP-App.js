const http = require('http')
const { readFileSync } = require('fs')

// Get all files
const homePage = readFileSync('../v02_Navbar-App/index.html')                // HTML
const homeStyles = readFileSync('../v02_Navbar-App/styles.css')              // CSS
const homeImage = readFileSync('../v02_Navbar-App/logo.jpg')                 // LOGO (SVG)
const homeLogic = readFileSync('../v02_Navbar-App/browser-app.js')           // JS

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  // HOME PAGE
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // STYLES (Getting CSS files)
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // Image/Logo
  else if (url === '/logo.jpg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  // Logic (JavaScript)
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>404 : PAGE NOT FOUND</h1>')
    res.end()
  }
})

server.listen(5000)
