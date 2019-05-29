const CoffeShop = require('../../models/coffeshop')

CoffeShop.methods(['get','post','put','delete'])
CoffeShop.updateOptions({new: true, runValidators:true})

CoffeShop.route('count', function(req, res, next){
    CoffeShop.count(function(error, value){
        if(error){
            res.status(500).json({errors:[error]})
            return;
        }
        res.json({value})
    })
})

module.exports = CoffeShop