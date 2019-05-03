const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const credentials = {username: '1', password: '1'}

app.use(bodyParser.text())

app.get('/', (req, res) => res.send('Hello from server'));
app.post('/', (req, res) => {
  const data = JSON.parse(req.body)
  console.log('data', data)
  if (data.username === credentials.username && data.password === credentials.password) {
    console.log('You\'ve logged in!')
    res.setHeader('Content-Type', 'application/json')
    res.send({data: 'accepted'});
  } else {
    console.log('incorrect credentials')
    res.setHeader('Content-Type', 'application/json')
    res.send({data: 'incorrect credentials'});
  }
})

app.listen(port, () => console.log(`app is listening on port ${port}`));
