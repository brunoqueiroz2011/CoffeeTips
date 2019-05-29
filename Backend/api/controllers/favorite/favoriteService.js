const FavoriteCoffee = require('../../models/favorite')

FavoriteCoffee.methods(['get','post','put','delete'])
FavoriteCoffee.updateOptions({new: true, runValidators:true})

FavoriteCoffee.route('count', function(req, res, next){
    FavoriteCoffee.count(function(error, value){
        if(error){
            res.status(500).json({errors:[error]})
            return;
        }
        res.json({value})
    })
})

module.exports = FavoriteCoffee