const express = require('express')
// const cors = require('cors')
const app = express()
const port = 2000


// app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello')
})

app.listen(port)