const express = require("express");
const bodyParser = require("body-parser");
const router = require("./web/Router");

const app = express()
const port  = 5000;

// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended : true}))

// Routes
app.use(router);

// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))

