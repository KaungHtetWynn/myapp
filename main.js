// Import packages
const express = require('express')
const morgan = require('morgan')

// Configure our port
// Check if it set in environment variable, if not then we default to 3000
// port env variables are uppercase
const port = process.env.PORT || 3000

// Create an instance of express application
const app = express()

// Log all request
// common = Apache
app.use(morgan('common'))

// GET /
app.get('/', (req, resp) => {

    // return HTML content
    resp.type('text/html')
    // set the status code
    resp.status(200)
    // send the response
    resp.send(`<h1>The time now is ${new Date()}</h1>`)
})

// Start our web application
app.listen(port, () => {
    console.info(`Starting application on port ${port} at ${new Date()}`)
})

// railway will set port
// backtick
console.info(`port = ${port}`)





