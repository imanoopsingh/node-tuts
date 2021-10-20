const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("THis is my homepage");
    }
    if(req.url === '/about') {
        for (let i = 0; i<1000; i++) {
            for (let j=0; j<1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('this is about us page');
    }
    res.end('Oops... you get 404')
})

const port = 5000;
server.listen(port, () => {
    console.log(`The server is listerning at ${port} port`);
})