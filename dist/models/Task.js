"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _passport = require("passport");
// If I want that the title be a primary key
var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
    //Trim is used to cut the space
    trim: true
  },
  description: {
    type: String,
    require: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Task", taskSchema);
exports["default"] = _default;