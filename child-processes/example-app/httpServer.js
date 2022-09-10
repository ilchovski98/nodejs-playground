const http = require('http');

const port = 8000;
const host = 'localhost';

const slowFunction = () => {
  let counter = 0;

  while (counter < 5000000000) {
    counter++;
  }

  return counter
}

const requestListener = (req, res) => {
  if (req.url === '/total') {
    const slowResult = slowFunction();
    const message = `Slow result: ${slowResult}`;

    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(message);
  } else if (req.url === '/hello') {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end('{"message": "Hello"}');
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end('<h1>Welcome</h1>');
  }
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}/${port}!`);
})
