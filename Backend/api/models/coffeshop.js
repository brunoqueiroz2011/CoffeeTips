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
    password:{type: String, require: [true, "Informe o Senha da cafeteria!"]},    
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

coffeeshopSchema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

coffeeshopSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = restful.model('coffeeshop', coffeeshopSchema)