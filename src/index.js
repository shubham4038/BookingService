const express = require('express')
const {PORT} = require('./config/serverConfig')

const app = express();

const setupAndStartServer = ()=>{
    app.use(express.json());
    app.use(globalderrorHandler)
    app.listen(PORT,()=>{
        console.log(`Listening form the server ${PORT} `)
    })
}

setupAndStartServer();