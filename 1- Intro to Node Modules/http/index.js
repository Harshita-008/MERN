const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res) => {
    let log = `${Date.now()} : ${req.url} New request received`
    fs.appendFile('log.txt', log, (err, data) => {
        console.log('Log updated');
    })

    // (1) To send data to log.txt
    // SERVER SIDE RENDERING
    // DOM, webpage, etc -> CLIENT SIDE RENDERING
    switch(req.url) {
        case '/':
            res.end('Home page data')  // to render an entire page just passs the html file here
            break
        case '/about':
            res.end('About page data')
            break
        case '/contact':
            res.end('Contact page data')
            break
    }

    console.log(req.url)
    // console.log(req.headers)
    // console.log('New Request')
    // res.end('New response sent')
})

myServer.listen(8000, () => {
    console.log("Server started")
})

