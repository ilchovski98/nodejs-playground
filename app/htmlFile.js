const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);

  fs.readFile(__dirname + '/index.html', (err, data) => {
    res.end(data)
  })
};

const requestListener2 = (req, res) => {
  fs.promises.readFile(__dirname + '/index.html')
    .then(content => {
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(content);
    })
    .catch(error => {
      res.writeHead(500);
      res.end(error);
    })
};

const server = http.createServer(requestListener2);

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
