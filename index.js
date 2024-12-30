require('dotenv').config()
const express = require('express')
const cors = require('cors')
const route = require('./Routes/routes')
require('./Connection/db')

const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(route)

pfServer.use('/Uploads', express.static('./Uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})