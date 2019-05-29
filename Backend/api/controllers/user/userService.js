const User = require('../../models/user')

User.methods(['get','post','put','delete'])
User.updateOptions({new: true, runValidators:true})

User.route('count', function(req, res, next){
    User.count(function(error, value){
        if(error){
            res.status(500).json({errors:[error]})
            return;
        }
        res.json({value})
    })
})

module.exports = User