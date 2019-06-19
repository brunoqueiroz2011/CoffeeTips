const restful = require('node-restful')
const mongoose = restful.mongoose
const bcrypt = require('bcrypt');
const saltRounds = 10;

const paymentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Informe as formas de pagamento da cafeteria!'] }
  })

const coffeeshopSchema = new mongoose.Schema({
    id:{type:Number,min:11, max:14, require:[true, "Informe o seu CPF ou CNPJ!"], index: { unique: true }},
    username:{type: String, require: [true, "Informe o login da cafeteria!"]},
    password:{ type: String, min: 6, max: 12, require: [true, "Informe o Senha da cafeteria!"]},    
    name:{type: String, require: [true, "Informe o nome da cafeteria!"]},
    description:{type: String, require: [true, "Informe a descrição da cafeteria!"]},
    neighborhood:{type: String, require: [true, "Informe o bairro da cafeteria!"]},
    address:{type: String, require: [true, "Informe o endereço da cafeteria!"]},
    schedule:{type: String, require: [true, "Informe o(s) horários da cafeteria!"]},
    telephone:{type: String, require: [true, "Informe o telefone da cafeteria!"]},
    email:{type: String, require: [true, "Informe o e-mail da cafeteria!"]},
    instagram:{type: String, require: [true, "Informe o Instagram da cafeteria!"]},
    facebook:{type: String, require: [true, "Informe o Facebook da cafeteria!"]},
    formsPayment:[paymentSchema],
    soon:{type: String, require: [true, "Insira a logo da cafeteria!"]},
    img_local:{type: String, require: [true, "Insira as imagens do local da cafeteria!"]},
    statusCoffeeShop:{type: String,require:true}
})


module.exports = restful.model('coffeeshop', coffeeshopSchema)