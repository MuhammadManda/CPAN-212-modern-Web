import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10).then((hashedPassword) => {
    let newUser = new User({
      email,
      password: hashedPassword,
    });
    newUser.save().then(() => {
      res.json({ message: "regi is suuccessfull" });
    });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((userAccount) => {
        if (!userAccount) {
          console.log(email)
        return res.status(400).json({ message: "NO ACC FOUND" });
      }
      bcrypt.compare(password, userAccount.password).then((compareResults) => {
        if (compareResults) {
          return res.json({ message: "YOU HAVE LOGGED IN" });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ message: "Acc not found" });
    });
});
export default router;
