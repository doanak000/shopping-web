const bcrypt = require("bcryptjs");
// const Account = require("../../models/account");
const Account = require("../../models/user");

exports.register = async (firstname, lastname, username, password, address) => {
    console.log(firstname, lastname, username, password, address)
    //check if username is already registerd
    const account = await Account.findOne({ account: username});
    console.log(account)
    if (account){
        throw new Error("username already registered");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    return await Account.create({name: firstname + " " + lastname, sex: "", role: "user", address: address, account: username, password: hashPassword})
};