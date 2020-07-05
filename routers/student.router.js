const {
  create,
  getStudent,
  getStudents,
  update,
  deleteStudent,
} = require("../controllers/student.controller");
const route = require("express").Router();

route.get("/", getStudents);
route.get("/:username", getStudent);
route.post("/", create);
route.put("/:username", update);
route.delete("/:username", deleteStudent);

module.exports = route;
