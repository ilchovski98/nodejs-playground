const http = require('http');
const fs = require('fs');

console.log(__dirname);
const server = http.createServer((req, res) => {
  fs.readFile(__dirname + '/file.txt', (err, data) => {
    console.log('data', data);
    res.end(data)
  })
});

server.listen(5005);
