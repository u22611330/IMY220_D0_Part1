"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//const express = require("express");

var app = (0, _express["default"])();
app.use(_express["default"]["static"]('frontend/public'));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, "../../frontend/public", "index.html"));
});
app.listen(3000, function () {
  console.log("Listening on http://localhost:3000");
});