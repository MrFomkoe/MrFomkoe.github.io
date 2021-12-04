const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// path = require('path');
const MongoClient = require('mongodb').MongoClient;
const uri =
  'mongodb+srv://group3:jsgroupproject@cluster0.ivs3a.mongodb.net/fita-js-project?retryWrites=true&w=majority';
MongoClient.connect(uri, (err, client) => {
  if (err) return console.error(err);
  console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log('listening on 3000');
});

//   app.get(endpoint, callback)

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  //   res.sendFile(path.join(__dirname, '../index.html'));
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
});
// console.log('dirname: ', __dirname);

// app.post('/quotes', (req, res) => {
//   console.log('Hellooooooooooooooooo!');
// });

app.post('/quotes', (req, res) => {
  console.log(req.body);
});
