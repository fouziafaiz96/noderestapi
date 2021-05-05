const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already exists!"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;
// const studentRecord = new studentModel({
//   name: "Fouzia Noor",
//   email: "f@yahoo.com",
//   phone: "045-8965471",
//   address: "Rawalpindi",
// });
// reactLearning.save();
