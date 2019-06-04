const master = require('./config/server')
require('./config/database')
require('./api/routes/router')(master.server,master.multipartMiddleware)