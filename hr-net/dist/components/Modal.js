"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _macro = _interopRequireDefault(require("styled-components/macro"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Overlay = _macro.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 120%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n"])));
const ModalContainer = _macro.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 50%;\n  position: fixed;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  background-color: white;\n  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);\n  border-radius: 10px;\n"])));
const CloseBtn = _macro.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: -0.5rem;\n  top: -1.75rem;\n  height: 30px;\n  width: 30px;\n  position: fixed;\n  font-weight: bold;\n  background-color: black;\n  color: white;\n  border-radius: 50px;\n"])));
const Content = _macro.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 1rem;\n"])));
const Modal = _ref => {
  let {
    open,
    onClose
  } = _ref;
  if (!open) return null;
  return /*#__PURE__*/_react.default.createElement(Overlay, {
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(ModalContainer, {
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement(CloseBtn, {
    onClick: onClose
  }, "X"), /*#__PURE__*/_react.default.createElement(Content, null, "Employee Created!")));
};
var _default = Modal;
exports.default = _default;