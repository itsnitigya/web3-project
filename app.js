const express = require('express')
const response = require('./utils/responseHandler');
const app = express()
const routes = require('./routes/index')

// ------- MIDDLEWARES --------
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(response)
//-----------------------------

// ------- ROUTES -------
app.use('/api', routes)
//-----------------------------
module.exports = app