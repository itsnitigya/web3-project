const express = require('express')

const app = express()
const routes = require('./routes/index')

// ------- ROUTES -------
app.use('/api', routes)

//-----------------------------
module.exports = app