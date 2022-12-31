"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = require("express");
var _Task = _interopRequireDefault(require("../models/Task"));
var _task = require("../controllers/task.controller");
var router = (0, _express.Router)();
router.get("/", _task.renderTask);
router.get("/about", function (req, res) {
  res.render("about");
});
router.get("/tasks/:id/editing", _task.renderEdit);
router.post("/tasks/:id/edit", _task.taskEdit);
router.get("/tasks/:id/delete", _task.deleteTask);
router.post("/tasks/add", _task.createTask);
router.get("/tasks/:id/toogleDone", _task.toogleTask);
module.exports = router;