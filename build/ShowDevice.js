"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Props = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Device = require("./Device");

var ShowDevice = function ShowDevice(_ref) {
  var ui = _ref.ui,
      api = _ref.api,
      id = _ref.id;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      device = _useState2[0],
      setDevice = _useState2[1];

  (0, _react.useEffect)(function () {
    api.gatherDevice(id, function (device) {
      setDevice(device);
    });
  }, [api]);
  return /*#__PURE__*/_react["default"].createElement(ui.layout, null, device === null ? /*#__PURE__*/_react["default"].createElement(_Device.DevicePlaceholder, null) : /*#__PURE__*/_react["default"].createElement(_Device.Device, {
    data: device.data
  }));
};

var Props = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired
  }).isRequired,
  api: _propTypes["default"].shape({
    gatherDevice: _propTypes["default"].func.isRequired
  }).isRequired,
  id: _propTypes["default"].string.isRequired
};
exports.Props = Props;
ShowDevice.propTypes = Props;
var _default = ShowDevice;
exports["default"] = _default;