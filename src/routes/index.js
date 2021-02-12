const express = require("express");
const router = express.Router();
const loginApi = require("./auth/login/login");
const registerApi = require("./auth/register/register");
router.use("/login", loginApi);
router.use("/register", registerApi);

module.exports = router;
