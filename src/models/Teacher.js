const mongoose = require("mongoose");
const TeacherSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  nationalCode: { type: String, required: true, unique: true },
  //   birthday: { type: Date, required: true },
  birthday: { type: String, required: true },
  phone: { type: String, required: true },
  courses: { type: Object, default: {} },
  address: { type: String, required: true },
  password: { type: String, required: true },
});
const TeacherModel = mongoose.model("teacher", TeacherSchema);
module.exports = TeacherModel;
