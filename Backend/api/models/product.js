const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    cafeteria_Id:{type:String, require:[true,'Informe o id da cafeteria']},
    name:{type:String, require:[true,'Informe o nome do produto']},
    Ingredients:{type:String, require:[true,'Informe os ingredientes do produto']},
    description:{type:String, require:[true,'Informe a descrição do produto']},
    price:{type:String, require:[true,'Informe a descrição do produto']},
    statusProduct:{type:String, require:[true,'Informe o status do produto']}
})

module.exports = restful.model('product', productSchema)
