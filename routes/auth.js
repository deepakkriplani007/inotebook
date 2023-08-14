const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
//crate a user using :post "api/auth/". dosen't require authentication
router.post(
  "/",
  [
    body("email", "enter a valid email").isEmail(),
    body("name", "enter a valid name").isLength({ min: 5 }),
    body("password", "enter a valid password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({ error: "pease enter unique value", message: err.message });
      });
  }
);
module.exports = router;
