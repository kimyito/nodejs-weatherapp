const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})
app.post('/', function (req, res) {
  console.log(req.body.city);
  res.render('index');  
})
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})