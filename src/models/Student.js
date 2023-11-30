const mongoose = require("mongoose");


const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lName: {
    type: String,
    require: true,
  },
  fatherName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  id: {
    type: Number,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  cast: {
    type: String,
    require: true,
  },
  religion: {
    type: String,
    require: true,
  },
  pcb: {
    type: String,
    require:true
  },
  address: {
    type: String,
    require: true,

  },
  contact: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model("Student", StudentSchema);
