const authService = require("./authService");
const Account = require("../../models/user");
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    const { firstname, lastname, username, password, confirmpassword, birthday, address} = req.body;
    const account = await Account.findOne({ account: username});
    try {
        if(!firstname){
            res.render('../components/auth/register', { err1: "Please fill in your first name", firstname, lastname, username, password, birthday, address});
        }
        else if(!lastname){
            res.render('../components/auth/register', { err2: "Please fill in your last name", firstname, lastname, username, password, birthday, address});
        }
        else if(!username){
            res.render('../components/auth/register', { err3: "Please fill in your username", firstname, lastname, username, password, birthday, address});
        }
        else if(account){
            res.render('../components/auth/register', { existedusername: "This username existed", firstname, lastname, username, password, birthday, address});
        }
        else if(!password){
            res.render('../components/auth/register', { err4: "Please fill in your password", firstname, lastname, username, password, birthday, address});
        }
        else if(!confirmpassword){
            res.render('../components/auth/register', { err5: "Please confirm your password", firstname, lastname, username, password, birthday, address});
        }
        else if(!address){
            res.render('../components/auth/register', { err6: "Please fill in your address", firstname, lastname, username, password, birthday, address});
        }
        else if(password.length < 8){
            res.render('../components/auth/register', { err7: "Password must have at least 8 characters", firstname, lastname, username, password, birthday, address});
        }
        else if(confirmpassword != password){
            res.render('../components/auth/register', { err8: "Confirm password does not match", firstname, lastname, username, password, birthday, address});
        }
        else{
            await authService.register(firstname, lastname, username, password, birthday, address)
            res.redirect("/login");
        }
    }
    catch(err){
        console.log(err)
        res.render('../components/auth/register', { errorCode: 2});
    }
};

exports.edit = async (req, res) => {
    const { name, username, birthday, address} = req.body;
    await authService.edit(name, username, birthday, address);
    req.session.passport.user.name = name;
    req.session.passport.user.birthday = birthday;
    req.session.passport.user.address = address;
    res.redirect("/profile");
};

exports.changePassword = async (req, res) => {
    const { username, currentpassword, newpassword, confirmnewpassword} = req.body;
    const account = await Account.findOne({ account: username}); 
    const match = await bcrypt.compare(currentpassword, account.password);
    try {
        if(!match){
            res.render('../components/profile/change_password', { err0: "Incorrect password"});
        }
        else if(newpassword.length < 8){
            res.render('../components/profile/change_password', { err1: "Password must have at least 8 characters"});
        }
        else if(confirmnewpassword != newpassword){
            res.render('../components/profile/change_password', { err2: "Confirm password does not match"});
        }
        else{
            await authService.changePassword(username, newpassword)
            res.redirect("/logout");
        }
    }
    catch(err){
        console.log(err)
        res.render('../components/profile/change_password', { errorCode: 2});
    }
};