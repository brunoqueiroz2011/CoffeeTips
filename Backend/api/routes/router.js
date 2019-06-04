const express = require('express')

module.exports = function (server, multipartMiddleware){
    const router = express.Router()
    server.use('/api', router)



    const ctbCoffeShop = require('../controllers/coffeshop/coffeshopService')
    ctbCoffeShop.register(router,'/coffeshop')

    const ctbUser = require('../controllers/user/userService')
    ctbUser.register(router,'/user')

    const ctbEvent = require('../controllers/event/eventService')
    ctbEvent.register(router,'/event')

    const ctbProduct = require('../controllers/product/productService')
    ctbProduct.register(router,'/product')
    
    const ctbFavorite = require('../controllers/favorite/favoriteService')
    ctbFavorite.register(router,'/favorite')
    
    const uploadFileService = require('../Controllers/uploadFiles/uploadFileService')
    router.route('/uploadGet').get(uploadFileService.getFiles)
    router.route('/uploadPost').post(multipartMiddleware,uploadFileService.postFiles)
}