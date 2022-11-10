"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    open,
    onClose
  } = _ref;
  if (!open) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContainer",
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "closeBtn",
    onClick: onClose
  }, "X"), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, "Employee Created!")));
};
var _default = Modal;
exports.default = _default;