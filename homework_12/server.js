const http = require('http');
const url = require('url');
const static = require('node-static');
const file = new static.Server('.', { cache: 0 });


function handle(req, res) {
    console.log('req.url: ', req.url)
    if (req.url.startsWith('/homework_12/static')){
        file.serve(req, res)
    } else if (req.url === '/homework_12/vote') {
        res.end(new Date().toString())
    } else {
        res.end("unsuported url")
    }
}

const server = http.createServer(handle);
server.listen(5000);
