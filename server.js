const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const router = require("./router")
var bodyParser = require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// router
app.use('/api', router)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB connected'))
.catch(err=>console.log(err))


//run server
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server started in port ${PORT}`))

