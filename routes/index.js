const usersRouter = require('./user')
const homeRouter = require('./home')
const shopdetailsRouter =require('./shop_details')
const shopgridRouter = require('./shop_grid')
function route(app){

    app.use('/user', usersRouter)
    app.use('/items', shopgridRouter)
    app.use('/item', shopdetailsRouter)
    app.use('/', homeRouter)
};

module.exports = route;