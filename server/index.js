const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const https = require('https');
const PORT = 8000;

const app = express();

// For the purpose of this sample application, credentials are saved here.
// For production purposes, credentials should be saved in a database.
const credentials = {username: '1', password: '1', lockCount: 0, lockedTime: null};
const lockSetting = 5000;
const numberOfAttemptSetting = 3;
// Encryption at the client side simply adds the below string to the credentials, but a more robust method can be implemented for production.
const encryptionMethod = "encrypted";

function verySecureDecryptor(str) {
  return str.substring(0, str.length - 9);
};

app.use(bodyParser.text());

app.get('/', (req, res) => res.send('Welcome to the server'));
app.get('/encrypt', (req, res) => {
  const responseData = {"data": encryptionMethod};
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(responseData));
});
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.post('/', (req, res) => {
  const data = JSON.parse(req.body);

  // Handle too many login attempt
  if (Date.now() - credentials.lockedTime < lockSetting) {
    console.log('Account is locked');
    const responseData = {"data": "locked"};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData));

  // Handle successful login attempt
  } else if (verySecureDecryptor(data.username) === credentials.username && verySecureDecryptor(data.password) === credentials.password) {
    console.log('Successfuly logged in');
    const responseData = {"data": "accepted"};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData));
  
  // Handle incorrect login attempt
  } else if (verySecureDecryptor(data.username) !== credentials.username || verySecureDecryptor(data.password) !== credentials.password) {
    console.log('Incorrect log in attempt');
    credentials.lockCount++;
    let responseData = {"data": "rejected"};
    if (credentials.lockCount > numberOfAttemptSetting - 1) {
      credentials.lockCount = 0;
      credentials.lockedTime = Date.now();
      console.log('Account is locked');
      responseData = {"data": "locked"};
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData));
  }
});

https.createServer({
  key: fs.readFileSync(__dirname + '/certs/server.key'),
  cert: fs.readFileSync(__dirname + '/certs/server.cert')
}, app).listen(PORT, () => {
  console.log('Listening to port', PORT);
});
