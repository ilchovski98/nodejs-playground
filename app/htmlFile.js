const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 8000;

let indexFile;

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(indexFile);
}

const server = http.createServer(requestListener);

fs.promises.readFile(__dirname + '/index.html')
  .then(content => {
    indexFile = content;

    server.listen(port, host, () => {
      console.log(`Server is listening on http://${host}:${port}`);
    });
  })
  .catch(error => {
    console.log("Couldn't load file!");
    process.exit(1);
  });
