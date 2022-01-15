var createError = require("http-errors");
var express = require("express");
const db = require("./db/mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
// var logger = require("morgan");
const passport = require("./auth/passport");
const session = require('express-session');
const expressHandlebarsSections = require("express-handlebars-sections");

var homeRouter = require("./routes/home");
var shopgridRouter = require("./routes/shop_grid");
var shopdetailsRouter = require("./routes/shop_details");
var productdetailsRouter = require("./components/products/product_details");
var shopingcartRouter = require("./components/cart/shoping_cart");
var checkoutRouter = require("./components/orders/checkout");
var loginRouter = require("./components/auth/login");
var logoutRouter = require("./components/auth/logout");
const registerRouter = require("./components/auth/register");
const profileRouter = require("./components/profile/profile");
const itemRouter = require("./routes/item");

var app = express();
const Handlebars = require('handlebars');
// var { engine } = require("express-handlebars");
var exphbs = require("express-handlebars");
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
var hbs = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs",
  helpers: {
    section: function(name, options){
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    }
  }
})

app.engine('hbs', hbs.engine);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// app.use(logger("dev"));
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

app.use("/", homeRouter);
app.use("/shop-grid", shopgridRouter);
// app.use("/shop-details", shopdetailsRouter);
app.use("/shop-details", productdetailsRouter);
app.use("/shop-details/:id", productdetailsRouter);
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

module.exports = app;
