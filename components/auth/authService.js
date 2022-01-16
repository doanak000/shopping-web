const bcrypt = require("bcryptjs");
const Account = require("../../models/user");

exports.register = async (firstname, lastname, username, password, birthday, address) => {
    console.log(firstname, lastname, username, password, birthday, address)
    //check if username is already registerd
    const account = await Account.findOne({ account: username});
    if (account){
        throw new Error("username already registered");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    return await Account.create({name: firstname + " " + lastname, sex: "", role: "user", birthday: birthday, address: address, account: username, password: hashPassword})
};

exports.edit = async (name, username, birthday, address) => {
    //check if username is existed
    const account = await Account.findOne({ account: username});
    if (!account){
        throw new Error("The account does not exist!");
    }
    const filter = { account: username };
    const update = {name: name, birthday: birthday, address: address};
    return await Account.findOneAndUpdate(filter, update);
};

exports.changePassword = async (username, newpassword) => {
    //check if username is existed
    const account = await Account.findOne({ account: username});
    console.log(account)
    if (!account){
        throw new Error("The account does not exist!");
    }
    const filter = { account: username };
    const hashPassword = await bcrypt.hash(newpassword, 10);
    const update = {password: hashPassword};
    return await Account.findOneAndUpdate(filter, update);
};