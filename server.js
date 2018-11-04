const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const dotenv = require('dotenv');
dotenv.load();

const apiKey = process.env.WEATHER_API_KEY;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let userInput = req.body.userInput;
  var url = "";
  if (/^\d+$/.test(userInput)) {
    url = `https://api.openweathermap.org/data/2.5/weather?zip=${userInput},us&units=imperial&appid=${apiKey}`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=${apiKey}`;
  }

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

