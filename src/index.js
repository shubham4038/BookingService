const express = require('express')
const {PORT} = require('./config/serverConfig');
const router = require('./routes/routes');

const app = express();

const setupAndStartServer = ()=>{
    app.use(express.json());
    app.use('/bookingservice/api/v1',router)
    app.listen(PORT,()=>{
        console.log(`Listening form the server ${PORT} `)
    })
}

setupAndStartServer();