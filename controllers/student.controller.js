const studentModel = require("../services/firebase");

async function create(req, res) {
  var student = req.body;
  var result = await studentModel.create(student);
  res.json({ code: 200, data: result });
}

async function getStudent(req, res) {
  var username = req.params.username;
  var student = await studentModel.get(username);
  res.json({
    code: 200,
    data: student,
  });
}

async function getStudents(req, res) {
  var query = req.query;
  var students = await studentModel.getAll(query);
  res.json({
    code: 200,
    data: students,
  });
}

async function update(req, res) {
  var username = req.params.username;
  var newValue = req.body;
  var result = await studentModel.update(username, newValue);
  res.json({
    code: 200,
    data: result,
  });
}

async function deleteStudent(req, res) {
  var username = req.params.username;
  var result = await studentModel.deleteStudent(username);
  res.json({ code: 200, data: result });
}

module.exports = {
  create,
  getStudent,
  getStudents,
  update,
  deleteStudent,
};
