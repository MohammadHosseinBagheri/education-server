const express = require("express");
const router = express.Router();
const StudentModel = require("../../../models/Student");
router.post("/", (req, res) => {
  const { password, nationalCode } = req.body;
  //manager
  StudentModel.find({ nationalCode: nationalCode }, async (error, response) => {
    if (error) {
      res.json(error);
    } else if (response.length !== 0) {
      const dbPassword = await response[0].password;
      if (dbPassword !== password) {
        res.json("اطلاعات ورودی اشتباه است");
      } else {
        res.json(...response);
      }
    } else {
      res.json("چنین کاربری وجود ندارد");
      //teacher
    }
  });
});

module.exports = router;
