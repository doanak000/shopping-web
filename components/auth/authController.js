const authService = require("./authService");
exports.register = async (req, res) => {
    const { firstname, lastname, username, password, birthday, address} = req.body;
    try {
        if(!username || !password){
            res.render('../components/auth/register', { errorCode: 1});
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