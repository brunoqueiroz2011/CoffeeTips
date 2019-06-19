const restful = require('node-restful')
const mongoose = restful.mongoose


const userSchema = new mongoose.Schema({  
    name:{type:String, require:[true, 'Informe o nome do Usuário']},
    password:{ type: String, min: 6, max: 12, require:[true, 'Informe a senha do Usuário']},
    email:{type:String, require:[true, 'Informe o e-mail do Usuário']},
    cpf:{type:Number,min:11, require:[true, "Informe o seu CPF!"], index: { unique: true }},    
    cep:{type:Number, require:[false, 'Informe o bairro do Usuário']}
})

module.exports = restful.model('User', userSchema)