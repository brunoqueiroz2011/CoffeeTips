const restful = require('node-restful')
const mongoose = restful.mongoose

const eventSchema = new mongoose.Schema({
    coffeeshop_Id:{type:String, require:[true,'Informe o id da cafeteria']},
    name:{type:String, require:[true, 'Informe o nome do evento']},
    date:{type:String, require:[true, 'Informe a data do evento']},
    hour:{type:String, require:[true, 'Informe a hora do evento']},
    local:{type:String, require:[true, 'Informe o local do evento']},
    qtdPeople:{type:Number, min:1, require:[true, 'Informe a quantidade de pessoas para o evento']},
    description:{type:String, require:[true, 'Informe a descrição do evento']},
    price:{type:Number, min: 0, require:false}
})

module.exports = restful.model('event', eventSchema)