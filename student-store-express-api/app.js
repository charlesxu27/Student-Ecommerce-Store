const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const router = require("./routes/store")
const axios = require("axios")
const fs = require('fs').promises

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
// app.use("/", router)


// homepage
app.get('/', (req, res) => {
    res.send("Welcome!")
})

// GET store items
app.get('/store', (req, res) => {
    fs.promises.readFile('./data/db.json')
    .then(data => res.send(data))
    .catch(err => {
        console.error(err)
        res.redirect('/')
    })
})

/* Generic error handler */
app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
  
    return res.status(status).json({
      error: { message, status },
    })
  })
  
module.exports = app

// Implement the GET route at /store, so that it returns the products like this: https://codepath-store-api.herokuapp.com/store
// Run your express API locally by running node start and confim it works at http://localhost:3001/store
// Modify your React app to fetch from the localhost API