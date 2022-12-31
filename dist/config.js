"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URI = exports.PORT = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var URI = process.env.MONGODB_URI || "mongodb+srv://santiyepes:admin123@cluster0.ths3gvo.mongodb.net/myDB?retryWrites=true&w=majority";
exports.URI = URI;
var PORT = process.env.PORT || 3000;
exports.PORT = PORT;