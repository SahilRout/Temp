const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log("Req From Browser");
    res.setHeader('Content-Type', 'text/html');
    let path = './views';
    switch (req.url) {
        case '/':
            path += '/index.html'
            break;
        case '/about':
            path += '/about.html'
            break;
        default:
            path += '/404.html'
            break;
    }
    fs.readFile(path, (err, fileData) => {
        if (err) {
            console.log(err);
        }
        else {
            res.write(fileData)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening at 3000');
})