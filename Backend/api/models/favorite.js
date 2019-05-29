const restful = require('node-restful')
const mongoose = restful.mongoose

const favoriteSchema = new mongoose.Schema({
    caffeeshop_Id:{type:String, require:[true,'Informe o id da cafeteria']},
    user_Id:{type:String, require:[true,'Informe o id do usuário']},
})

module.exports = restful.model('favorite', favoriteSchema)