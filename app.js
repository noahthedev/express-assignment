
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello Express!');
}); 

app.get('/burgers', (req, res) => {
  res.send('We have juicy cheese burgers!');
});

app.get('/pizza/pepperoni', (req, res) => {
  res.send('Your pizza is on the way!');
});

app.get('/echo', (req, res) => {
  const responseText = `Here are some details of your request:
  Base URL: ${req.baseUrl}
  Host: ${req.hostname}
  Path: ${req.path}
  `;
  res.send(responseText);
});

app.get('/queryViewer', (req, res) => {
  console.log(req.query);
  res.end();
});

app.get('/greetings', (req, res) => {
  const name = req.query.name;
  const race = req.query.race;

  if(!name) {
    return res.status(400).send('Please provide a name');
  }

  if(!race) {
    return res.status(400).send('Please provide a race');
  }

  const greeting = `Greetings ${name} the ${race}, welcome to earth.`;

  res.send(greeting);
})

app.get('/sum', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;

  res.send(`The sum of ${a} and ${b} is ${sum}.`)
})

app.get('/cipher', (req, res) => {
  const text = req.query.text;
  const shift = req.query.shift;
  
})

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});

