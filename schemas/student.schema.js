const Schema = require("mongoose").Schema;
const studentSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  name: String,
  gender: {
    type: String,
    enum: ["male", "female"],
  },
});

module.exports = studentSchema;
