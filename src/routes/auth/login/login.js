const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const StudentModel = require("../../../models/Student");
const ManagerModel = require("../../../models/Manager");
const TeacherModel = require("../../../models/Teacher");

router.post(
  "/",
  // check("natinalCode").isLength({ min: 10, max: 10 }),
  // check("password").isLength({ min: 8 }),
  (req, res) => {
    res.send(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { password, nationalCode } = req.body;
    //manager
    ManagerModel.find(
      { nationalCode: nationalCode },
      async (error, response) => {
        // console.log(...response);
        if (error) {
          res.json(error);
        } else if (response.length !== 0) {
          const dbPassword = await response[0].password;
          if (dbPassword !== password) {
            res.json("اطلاعات ورودی اشتباه است");
          } else {
            const target = { data: response[0] };
            const source = { type: "manager" };

            const returnedTarget = Object.assign(target, source);
            res.json(returnedTarget);
          }
        }
        return;
      }
    );
    StudentModel.find(
      { nationalCode: nationalCode },
      async (error, response) => {
        console.log(...response);
        if (error) {
          res.json(error);
        } else if (response.length !== 0) {
          const dbPassword = await response[0].password;
          if (dbPassword !== password) {
            res.json("اطلاعات ورودی اشتباه است");
          } else {
            const target = { data: response[0] };
            const source = { type: "student" };

            const returnedTarget = Object.assign(target, source);
            res.json(returnedTarget);
          }
        } else {
          TeacherModel.find(
            { nationalCode: nationalCode },
            async (err, ress) => {
              console.log(...ress);
              if (err) {
                res.json(err);
              } else if (ress.length !== 0) {
                const dbPass = await ress[0].password;
                if (dbPass !== password) {
                  res.json("اطلاعات ورودی اشتباه است");
                } else {
                  const target = { data: ress[0] };
                  const source = { type: "teacher" };

                  const returnedTarget = Object.assign(target, source);
                  res.json(returnedTarget);
                }
              } else {
                res.json("چنین کاربری وجود ندارد");
              }
              return;
            }
          );
        }
      }
    );
  }
);

module.exports = router;
