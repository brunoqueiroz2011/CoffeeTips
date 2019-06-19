const express = require('express')
const auth = require('../../config/auth')

module.exports = function (server, multipartMiddleware) {
    /*
    * Rotas abertas
    */
    const openApi = express.Router()
    server.use('/oapi', openApi)
    const AuthService = require('../models/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.userSignup)
    openApi.post('/validateToken', AuthService.validateToken)
    
    // ###########################################################################

    /*
    * Rotas protegidas por Token JWT
    */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)
    
    const ctbUser = require('../controllers/user/userService')
    ctbUser.register(protectedApi, '/user')

    const ctbCoffeShop = require('../controllers/coffeshop/coffeshopService')
    ctbCoffeShop.register(protectedApi, '/coffeshop')

    const ctbEvent = require('../controllers/event/eventService')
    ctbEvent.register(protectedApi, '/event')

    const ctbProduct = require('../controllers/product/productService')
    ctbProduct.register(protectedApi, '/product')

    const ctbFavorite = require('../controllers/favorite/favoriteService')
    ctbFavorite.register(protectedApi, '/favorite')
    // ###########################################################################

    /*const uploadFileService = require('../Controllers/uploadFiles/uploadFileService')
    router.route('/uploadGet').get(uploadFileService.getFiles)
    router.route('/uploadPost').post(multipartMiddleware, uploadFileService.postFiles)*/
}