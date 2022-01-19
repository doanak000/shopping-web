const createError = require("http-errors");
const express = require("express");
const db = require("./db/mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const passport = require("./auth/passport");
const session = require('express-session');
const expressHandlebarsSections = require("express-handlebars-sections");

//
const route = require('./routes')
const homeRouter = require("./routes/home");
const shopgridRouter = require("./routes/shop_grid");
const shopdetailsRouter = require("./routes/shop_details");
const productdetailsRouter = require("./components/products/product_details");
const shopingcartRouter = require("./components/cart/shoping_cart");
const checkoutRouter = require("./components/orders/checkout");
const loginRouter = require("./components/auth/login");
const logoutRouter = require("./components/auth/logout");
const registerRouter = require("./components/auth/register");
const profileRouter = require("./components/profile/profile");
const itemRouter = require("./routes/item");

const app = express();
const Handlebars = require('handlebars');
// const { engine } = require("express-handlebars");
const exphbs = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

// view engine setup
// app.engine("hbs", engine({ 
//   extname: ".hbs", 
//   defaultLayout: "main",
//   handlebars: allowInsecurePrototypeAccess(Handlebars),
//   section: expressHandlebarsSections(),
//   helpers: {
//     section: function(name, options){
//       if (!this._sections) this._sections = {};
//       this._sections[name] = options.fn(this);
//       return null;
//     }
//   }
// }));
Handlebars.registerHelper('times', function(n, block) {
  var accum = '';
  for(var i = 0; i < n; ++i)
      accum += block.fn(i);
  return accum;
});

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs",
  helpers: {
    section: function(name, options){
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    },
    times: function(n, block) {
      var accum = '';
      for(var i = 1; i < n; ++i)
          accum += block.fn(i);
      return accum;
    }
  }
});



app.engine('hbs', hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride('_method'));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//session config
app.use(session({ secret: "golddogs" }));
app.use(passport.initialize());
app.use(passport.session());

//Truyền req.user
app.use(function(req, res, next){
  res.locals.user = req.user;
  next();
})

//connect DB
db.connect();
route(app);
//app.use("/", homeRouter);
//app.use("/shop-grid", shopgridRouter);
// app.use("/shop-details", shopdetailsRouter);
//app.use("/shop-details", productdetailsRouter);
// app.use("/shop-details/:id", productdetailsRouter);
app.use("/shoping-cart", shopingcartRouter);
app.use("/checkout", checkoutRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/register", registerRouter);
app.use("/profile", profileRouter);

app.use(itemRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { layout: false });
});
route(app);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app;
