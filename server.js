const express = require('express');
const cors = require('cors');
const fetch = require('isomorphic-fetch');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());

const hostname = '10.154.0.2';
const port = 3001;

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'html', 'index.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error loading index.html file: ${err}`);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

app.get('/public/styles/styles.css', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'styles', 'styles.css');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error loading styles.css file: ${err}`);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(content, 'utf-8');
    }
  });
});

app.get('/public/scripts/script.js', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'scripts', 'script.js');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error loading script.js file: ${err}`);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(content, 'utf-8');
    }
  });
});

app.get('/api/v1/video_urls/find_urls', (req, res) => {
  const { written_term, category, written_language } = req.query;
  const url = `http://localhost:3000/api/v1/video_urls/find_urls?written_term=${written_term}&category=${category}&written_language=${written_language}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      res.status(500).send('There was a problem with the fetch operation');
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
