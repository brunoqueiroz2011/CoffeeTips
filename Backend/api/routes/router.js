const express = require('express')

module.exports = function (server){
    const router = express.Router()
    server.use('/api', router)

    const ctbCafeteria = require('../controllers/cafeteria/cafeteriaService')
    ctbCafeteria.register(router,'/cafeteria')

    

}