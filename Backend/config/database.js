const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_CoffeeTips')

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatorio."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."