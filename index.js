const express = require('express')
const bodyParser = require('body-parser')
const jwt=require('jsonwebtoken')
const cors = require('cors')

const app = express()
app.use(express.json())

app.get('/', (req,res) => {
    res.json({
        status : 200,
        message : "Server is up and running"
    })
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})