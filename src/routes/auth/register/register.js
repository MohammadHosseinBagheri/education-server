const express = require("express");
const router = express.Router();
const StudentModel = require("../../../models/Student");
const TeacherModel = require("../../../models/Teacher");
router.post("/", (req, res) => {
  const {
    type,
    name,
    lastName,
    phone,
    nationalCode,
    birthday,
    password,
    address,
    courses,
  } = req.body;
  if (type === "student") {
    StudentModel.find({ nationalCode }, (error, response) => {
      if (error) {
        res.status(400).json(error);
      } else if (response.length !== 0) {
        res.status(300).json("این کاربر قبلا ثبت نام شده است");
      } else {
        const newStudent = new StudentModel({
          name,
          lastName,
          phone,
          nationalCode,
          birthday,
          password,
          address,
          courses,
        });
        newStudent.save();

        res.status(200).json(req.body);
      }
    });
  } else {
    TeacherModel.find({ nationalCode }, (error, response) => {
      if (error) {
        res.status(400).json(error);
      } else if (response.length !== 0) {
        res.status(300).json("این کاربر قبلا ثبت نام شده است");
      } else {
        const newTeacher = new TeacherModel({
          name,
          lastName,
          phone,
          nationalCode,
          birthday,
          password,
          address,
          courses,
        });
        newTeacher.save();

        res.status(200).json(req.body);
      }
    });
  }
});
module.exports = router;
