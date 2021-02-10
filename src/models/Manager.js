const mongoose = require("mongoose");
const ManagerSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  nationalCode: { type: String, required: true, unique: true },
  birthday: { type: Date, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});
const ManagerModel = mongoose.model("manager", ManagerSchema);
module.exports = ManagerModel;
