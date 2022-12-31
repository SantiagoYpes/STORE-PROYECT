"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = require("./config");
//import mongoose from "mongoose"
//const mongoose = require('mongoose');

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var db;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _mongoose["default"].set('strictQuery', true);
          console.log(_config.URI);
          _context.next = 5;
          return _mongoose["default"].connect(_config.URI);
        case 5:
          db = _context.sent;
          console.log("DB connected", db.connection.name);
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 9]]);
}))();