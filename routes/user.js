const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
//dùng để đăng nhập
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.login(req.body.account, req.body.password);
    res.send(user);
  } catch (e) {
    res.status(400).send();
  }
});
// dùng để lấy thông tin tài khoản theo tên tài khoản
router.get("/users/:account", async (req, res) => {
  try {
    const user = await Task.findOne({ account: req.params.account });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});
//dùng để lấy danh sách user
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
