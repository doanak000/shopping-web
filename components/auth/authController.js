const authService = require("./authService");
exports.register = async (req, res) => {
    const { firstname, lastname, username, password, confirmpassword, birthday, address} = req.body;
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

function validate(firstname, lastname, username, password, birthday, address){
    if (!firstname || !lastname || !username || !password || !address){

    }
}

exports.edit = async (req, res) => {
    const { name, username, birthday, address} = req.body;
    await authService.edit(name, username, birthday, address);
    req.session.passport.user.name = name;
    req.session.passport.user.birthday = birthday;
    req.session.passport.user.address = address;
    res.redirect("/profile");
};