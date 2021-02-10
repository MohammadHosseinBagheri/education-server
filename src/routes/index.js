const express = require("express");
const router = express.Router();
const loginApi = require("./auth/login/login");
router.use("/login", loginApi);

module.exports = router;
