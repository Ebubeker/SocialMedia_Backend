const express = require("express");
const router = express.Router();
const path = require("path");
const usersRoute = require("../controller/userControllers");
const Users = require("../models/userLogin.model");
const jwt = require("jsonwebtoken");

router.get("/", usersRoute.userController);

router.route("/createUser").post((req, res) => {
  const username = req.body.username;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new Users({
    username,
    firstName,
    lastName,
    email,
    password,
  });

  newUser.save();
});

router.route("/confirmAccount/:id").get((req, res) => {
  const info = req.params.id;
  const username = info.split("_")[0];
  const password = info.split("_")[1];
  Users.findOne({ username: username, password: password }).then((resp) => {
    if (resp) {
      const id = resp._id;
      const token = jwt.sign({ id }, process.env.TOKEN_VALUE, {
        expiresIn: "24h",
      });
      res.json({ auth: true, token: token, result: resp });
    } else {
      res.json({ auth: false, message: "no user exists" });
    }
  });
});

const VerifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("I guess you need a toke lad");
  } else {
    jwt.verify(token, process.env.TOKEN_VALUE, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "authentication failed" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

router.get("/isUserAuth", VerifyJWT, (req, res) => {
  res.send("You are authenticated");
});

module.exports = router;
