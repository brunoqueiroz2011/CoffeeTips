const restful = require('node-restful')
const mongoose = restful.mongoose
const bcrypt = require('bcrypt');
const saltRounds = 10;


const userSchema = new mongoose.Schema({  
    cpf:{type:Number,min:11, require:[true, "Informe o seu CPF!"], index: { unique: true }},  
    username:{type: String, require: [true, "Informe o login da cafeteria"]},        
    password:{type:String, require:[true, 'Informe a senha do Usuário']},
    name:{type:String, require:[true, 'Informe o nome do Usuário']},
    email:{type:String, require:[true, 'Informe o e-mail do Usuário']},
    cep:{type:Number, require:[true, 'Informe o bairro do Usuário']}    
})

userSchema.pre('save', function(next) {
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

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = restful.model('user', userSchema)