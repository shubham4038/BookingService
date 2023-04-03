const amqplib = require('amqplib');

const createChannel = async ()=>{
    const connection = await amqplib.connect(MESSAGE_BOKER_URL);
    const channel = await connection.createChannel()
}