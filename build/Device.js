"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevicePlaceholderProps = exports.DevicePlaceholder = exports.DeviceProps = exports.Device = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var Device = function Device(_ref) {
  var data = _ref.data,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["data"]);
  var title = !data.corrupted ? "".concat(data.device.modelName, " ").concat(data.device.osInternalBuildId) : "Corrupted";
  return /*#__PURE__*/_react["default"].createElement(_ui.Container, props, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, title));
};

exports.Device = Device;
var DeviceProps = {
  data: _propTypes["default"].object.isRequired
};
exports.DeviceProps = DeviceProps;
Device.propTypes = DeviceProps;

var DevicePlaceholder = function DevicePlaceholder(_ref2) {
  var props = (0, _extends2["default"])({}, _ref2);
  return /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, props);
};

exports.DevicePlaceholder = DevicePlaceholder;
var DevicePlaceholderProps = {};
exports.DevicePlaceholderProps = DevicePlaceholderProps;
DevicePlaceholder.propTypes = DevicePlaceholderProps;