require('dotenv').config()
const express = require('express')
const cors = require('cors')
const route = require('./Routes/routes')
require('./Connection/db')
// const jwt = require('./Middlewares/jwtMiddleware')

const pfServer = express()

//configuring cors machanism in server
pfServer.use(cors())
//configuring json middleware to server to convert data from json to native
pfServer.use(express.json())

// pfServer.use(jwt)

//configuring routes into server
pfServer.use(route)

pfServer.use('/Uploads',express.static('./Uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})

