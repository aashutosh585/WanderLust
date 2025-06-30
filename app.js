if(process.env.NODE_ENV != "production") {
  require("dotenv").config(); 
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash =require("connect-flash");
const passport = require("passport");
const localStrategy=require("passport-local");
const User=require("./models/user.js");

const listingRouter =require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dbUrl=process.env.ATLASDB_URL;

mongoose.connect(dbUrl)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 3600, // time in seconds after which session will be updated
  crypto:{
    secret: process.env.SECRET // secret to encrypt the session
  }
});

store.on("error", ()=> {
  console.log("ERROR in MONGO SESSION STORE", err);  
});
// To save usser data in cookie with help of sessionId
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires:Date.now() + 7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true, //cross cripting attack
  },
};

// Main route
app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.use(session(sessionOptions));
app.use(flash()); // to display imp msg,alert to page

app.use(passport.initialize()); //A middleware to initialize passport
app.use(passport.session()); //A web application needs the ability to identify users as they brose from page to page. This series of requests and ressponses, each asssociated with the same user,is know as a session
passport.use(new localStrategy(User.authenticate())); // passport-local is a middleware that authenticates users using a username and password. It uses the User model to verify the credentials.

passport.serializeUser(User.serializeUser()); // serializeUser is used to save the user id in the session
passport.deserializeUser(User.deserializeUser()); // deserializeUser is used to retrieve the user from the session using the user id


app.use((req,res,next)=>{
  res.locals.success =req.flash("success");
  res.locals.error =req.flash("error");
  res.locals.currUser =req.user; // to access current user in ejs file
  next();
}); 

app.use("/listings",listingRouter); // CRUD
app.use("/listings/:id/reviews", reviewRouter); // Reviews
app.use("/", userRouter); // User

app.all("/*path" , (req, res, next) => {
  next(new ExpressError(404, "Page not Found"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.render("error.ejs",{message});
  // res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("working properly");
});
