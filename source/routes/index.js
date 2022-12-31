import { Router } from "express";
import Task from "../models/Task";
const router = Router();

import {renderTask, createTask, renderEdit, taskEdit, deleteTask, toogleTask} from "../controllers/task.controller"

router.get("/", renderTask);

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/tasks/:id/editing", renderEdit);

router.post("/tasks/:id/edit", taskEdit);

router.get("/tasks/:id/delete", deleteTask);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toogleDone", toogleTask)
module.exports = router;
