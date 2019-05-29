const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    cafeteria_Id:{type:String, require:[true,'Informe o id da cafeteria']},
    name:{type:String, require:[true,'Informe o nome do produto']},
    Ingredients:{type:String, require:[true,'Informe os ingredientes do produto']},
    description:{type:String, require:[true,'Informe a descrição do produto']},
    price:{type:String, require:[true,'Informe a descrição do produto']},
    status:{type:String, min: 0, require:true,
        enum:['Ativo','Futuro','Desativado']}
})

module.exports = restful.model('product', productSchema)
