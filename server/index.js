const express = require('express');
const bodyParser = require('body-parser');
const https = require ('https');

const app = express();

const port = 8000;
const credentials = {username: '1', password: '1', lockCount: 0, lockedTime: null};


app.use(bodyParser.text())

app.get('/', (req, res) => res.send('Welcome to the server'));

app.post('/', (req, res) => {
  const data = JSON.parse(req.body);
  console.log('data', data)
  if (Date.now() - credentials.lockedTime < 5000) {
    console.log('account locked');
    const responseData = {"data": "locked"};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData));
  } else if (data.username === credentials.username && data.password === credentials.password) {
    console.log('You\'ve logged in!');
    const responseData = {"data": "accepted"};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseData));
  } else if (data.username !== credentials.username || data.password !== credentials.password) {
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

app.listen(port, () => console.log(`app is listening on port ${port}`));
