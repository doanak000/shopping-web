const usersRouter = require('./user')
const homeRouter = require('./home')
const shopgridRouter = require('./shop_grid')

function route(app){

    app.use('/user', usersRouter)
    app.use('/products', shopgridRouter)
    //app.use('/item', shopdetailsRouter)
    app.use('/', homeRouter)
};

module.exports = route;