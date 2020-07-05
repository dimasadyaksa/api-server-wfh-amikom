const model = require("mongoose").model;
const studentSchema = require("../schemas/student.schema");
const db = model("Student", studentSchema);

function create(student) {
  let newStudent = new db(student);
  return newStudent.save();
}

function getAll(query = {}) {
  return db.find(query);
}

function get(username) {
  return db.findOne({ username: username });
}

function update(username, newValue) {
  return db.updateOne({ username: username }, newValue);
}

function deleteStudent(username) {
  return db.deleteOne({ username: username });
}

module.exports = {
  create,
  get,
  getAll,
  update,
  deleteStudent,
};
