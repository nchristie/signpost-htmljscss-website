const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} received.`);

  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error loading index.html file: ${err}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      }
    });
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
