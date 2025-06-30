const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup");
};

module.exports.signup =async (req, res) => {
        try{
            let { username, email, password } = req.body;
            const newUser = new User({email, username});
            const registeredUser = await User.register(newUser, password);
            req.login(registeredUser,(err)=>{
                if(err){
                    return next(err);
                }
                req.flash("success","Welcome to Wanderlust!");
                res.redirect("/listings");
            });
          
        }
        catch(e){
            req.flash("error", e.message);
            return res.redirect("/signup");
        }
};

module.exports.renderLoginForm =  (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = (req, res) => {
        req.flash("success","you are succesfully login!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);// passport change the info of session if we move to  /login req.session.redirectUrl 
};

module.exports.logout = (req,res)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","you re logged out");
        res.redirect("/listings");
    });
};

