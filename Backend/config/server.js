const port = 3003

const bodyparser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });

server.use(bodyparser.urlencoded({extended:true}))
server.use(bodyparser.json())
server.use(allowCors)

server.use(function(err, req, res, next) {
    res.json({'error':err.message})
});

server.listen(port, function(){
    console.log(`Backend is running on port ${port}. `)
})

module.exports = {server, multipartMiddleware}