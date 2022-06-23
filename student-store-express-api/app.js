const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const router = require("./routes/store")
const axios = require("axios")
const fs = require('fs').promises
const data = require('./data/db.json')
const { join } = require('path')

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
// app.use("/", router)


// homepage
app.get('/', (req, res) => {
    res.send("Welcome!")
})

// GET all store items
app.get('/store', (req, res) => {
    try {
        res.send(data)
    }
    catch {
        console.error(err)
        res.redirect('/')
    }
    // fs.readFile('./data/db.json')
    // .then(data => res.send(data))
    // .catch(err => {
    //     console.error(err)
    //     res.redirect('/')
    // })
})

// GET a single store item
app.get('/store/:productId', (req, res) => {
    productId = req.params.productId
    try {
        res.send(data.products[productId - 1])
    }
    catch {
        console.error("Product Not Found!")
        res.redirect('/')
    }
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

