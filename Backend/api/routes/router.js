const express = require('express')

module.exports = function (server){
    const router = express.Router()
    server.use('/api', router)

    const ctbCoffeShop = require('../controllers/coffeshop/coffeshopService')
    ctbCoffeShop.register(router,'/coffeshop')

    

    

}