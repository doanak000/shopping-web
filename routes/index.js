const usersRouter = require('./user')
const homeRouter = require('./home')
const itemRouter = require('./item')
const shopdetailsRouter =require('./shop_details')
function route(app){

    app.use('/user', usersRouter)
    app.use('/items', itemRouter)
    app.use('/item', itemRouter)
    app.use('/', homeRouter)
};

module.exports = route;