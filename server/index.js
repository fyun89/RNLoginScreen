const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const https = require('https')
// const start = Date.now()
// const protocol = process.env.PROTOCOL || 'https';
const PORT = 8000;
// const host = process.env.HOST || 'localhost';

// let server;

const app = express();

// For the purpose of this sample application, credentials are saved here.
// For production purposes, credentials should be saved in a database.
const credentials = {username: '1', password: '1', lockCount: 0, lockedTime: null};
const encryptionMethod = "encrypted";

app.use(bodyParser.text())

app.get('/', (req, res) => res.send('Welcome to the server'));
app.get('/encrypt', (req, res) => {
  console.log('/encrypt sent')
  const responseData = {"data": encryptionMethod};
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(responseData));
})
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

function verySecureDecryptor(str) {
  return str.substring(0, str.length - 9)
}

app.post('/', (req, res) => {
  const data = JSON.parse(req.body);
  console.log('data', data)

  // handle too many login attempt
  if (Date.now() - credentials.lockedTime < 5000) {
    console.log('account locked');
    const responseData = {"data": "locked"};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData));

  // handle successful login attempt
  } else if (verySecureDecryptor(data.username) === credentials.username && verySecureDecryptor(data.password) === credentials.password) {
    console.log('You\'ve logged in!');
    const responseData = {"data": "accepted"};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData));
  
  // handle incorrect login attempt
  } else if (verySecureDecryptor(data.username) !== credentials.username || verySecureDecryptor(data.password) !== credentials.password) {
    console.log('incorrect credentials');
    credentials.lockCount++;
    let responseData = {"data": "rejected"};
    if (credentials.lockCount > 2) {
      credentials.lockCount = 0;
      credentials.lockedTime = Date.now();
      console.log('locking sequence enabled');
      responseData = {"data": "locked"};
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData));
  }
})

https.createServer({
  key: fs.readFileSync(__dirname + '/certs/server.key'),
  cert: fs.readFileSync(__dirname + '/certs/server.cert')
}, app).listen(PORT, () => {
  console.log('Listening to port', PORT)
})
