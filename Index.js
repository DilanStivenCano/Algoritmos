const express = require('express');
const server = express();

server.use(express.static(__dirname + '/Public'));
server.listen(8080,()=>{
    console.log('Servidor corriendo');
});