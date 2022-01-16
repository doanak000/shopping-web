const mongoose = require("mongoose");
// tài khoản sẽ đăng nhập = account và password
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    default: 0,
  },
  birthday: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  account: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
  }
  //status là trạng thai user, nếu lock thì không login được, không lock thì login đc
});
// userSchema.statics.login = async (account, password) => {
//   const user = await User.findOne({ account });

//   if (!user) {
//     throw new Error("Unable to login");
//   }
//   if (password == user.password || user.status === 'lock') {
//     throw new Error("Unable to login");
//   }

//   return user;
// };
const User = mongoose.model("User", userSchema);
module.exports = User;
