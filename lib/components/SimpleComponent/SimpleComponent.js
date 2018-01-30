"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./SimpleComponent.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleComponent = function SimpleComponent() {
  return _react2.default.createElement(
    "div",
    { className: "simple-component" },
    "Simple Component"
  );
};

exports.default = SimpleComponent;