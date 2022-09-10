const http = require('http');
const { fork, ChildProcess } = require('child_process');

const port = 8000;
const host = 'localhost';

const requestListener = (req, res) => {
  if (req.url === '/total') {
    const child = fork(__dirname + '/getCount');

    child.on('message', (message) => {
      console.log('Returning /total results');
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(message);
    });

    child.send('START');
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
