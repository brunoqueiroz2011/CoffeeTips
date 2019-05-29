const EventCoffee = require('../../models/event')

EventCoffee.methods(['get','post','put','delete'])
EventCoffee.updateOptions({new: true, runValidators:true})

EventCoffee.route('count', function(req, res, next){
    EventCoffee.count(function(error, value){
        if(error){
            res.status(500).json({errors:[error]})
            return;
        }
        res.json({value})
    })
})

module.exports = EventCoffee