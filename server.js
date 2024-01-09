// import mdoules
import express from 'express'

// create Express app
const app = express()

// configure the app (app.set)



// mount Middleware (app.use)



// mount routes
app.get('/', function(req, res) {
  res.send(`<h1>Mulder, it's me</h1>`)
})

app.get('/home', function(req, res) {
  res.send(`<h1>Home Page</h1>`)
})

// tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Mulder, port 3000 is listening')
})