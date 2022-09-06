const http = require('http');

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end('<h1>Hello World!</h1>');
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
