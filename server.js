// import mdoules
import express from 'express'
import {sports} from './data/sports-data.js'

// create Express app
const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes
app.get('/', function(req, res) {
  res.send(`<h1>Mulder, it's me</h1>`)
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/sports', function(req, res) {
  res.render('sports/index', {
    sports: sports
  })
})

// tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Mulder, port 3000 is listening')
})