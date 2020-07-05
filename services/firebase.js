const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
const db = admin.firestore();

function create(student) {
  var studentRef = db.collection("students").doc(student.username);
  return studentRef.set(student);
}

async function get(username) {
  var studentRef = await db.collection("students").doc(username);
  var student = await studentRef.get();

  return student.data();
}

async function getAll(query) {
  var studentRef = db.collection("students");
  Object.keys(query).forEach((key) => {
    studentRef = studentRef.where(key, "==", query[key]);
  });
  var students = await studentRef.get();
  return students.docs.map((value) => value.data());
}

function update(username, newValue) {
  var studentRef = db.collection("students").doc(username);
  return studentRef.update(newValue);
}

function deleteStudent(username) {
  var studentRef = db.collection("students").doc(username);
  return studentRef.delete();
}

function search(query) {
  var studentRef = db.collection("students");
  Object.keys(query).forEach((key) => {
    studentRef = studentRef.where(key, "==", query[key]);
  });
  return studentRef.get();
}

module.exports = {
  create,
  get,
  getAll,
  deleteStudent,
  search,
  update,
};
