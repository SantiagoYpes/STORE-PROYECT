"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var URI = process.env.MONGODB_URI || "mongodb://mongo:F8iSJ0d6sDTBkzulvEn5@containers-us-west-173.railway.app:6170";
exports.URI = URI;