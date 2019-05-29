const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({    
    login:{type:String, require:[true, 'Informe o login do Usuário']},
    password:{type:String, require:[true, 'Informe a senha do Usuário']},
    name:{type:String, require:[true, 'Informe o nome do Usuário']},
    email:{type:String, require:[true, 'Informe o e-mail do Usuário']},
    neighborhood:{type:String, require:[true, 'Informe o bairro do Usuário']}    
})

module.exports = restful.model('user', userSchema)