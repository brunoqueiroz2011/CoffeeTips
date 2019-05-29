const ProductCoffee = require('../../models/product')

ProductCoffee.methods(['get','post','put','delete'])
ProductCoffee.updateOptions({new: true, runValidators:true})

ProductCoffee.route('count', function(req, res, next){
    ProductCoffee.count(function(error, value){
        if(error){
            res.status(500).json({errors:[error]})
            return;
        }
        res.json({value})
    })
})

module.exports = ProductCoffee