const http = require('http');

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(`{"message": "This is a json response"}`);
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
