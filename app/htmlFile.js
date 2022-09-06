const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);

  console.log('__dirname', __dirname);

  fs.readFile(__dirname + '/index.html', (err, data) => {
    console.log('data', data);
    res.end(data)
  })
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
