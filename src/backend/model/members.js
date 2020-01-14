const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  IdNum: { type: Number, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  address: { type: String, required: true }
});

module.exports = mongoose.model("Members", memberSchema);
