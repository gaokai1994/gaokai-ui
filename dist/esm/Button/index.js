function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import "./index.less";
import classNames from 'classnames';
import { jsx as _jsx } from "react/jsx-runtime";

var Button = function Button(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$size = props.size,
      size = _props$size === void 0 ? 'default' : _props$size;
  var prefix = 'gk-btn';
  var classes = classNames(prefix, _defineProperty({}, "".concat(prefix, "-").concat(type), type));
  return /*#__PURE__*/_jsx("button", {
    className: classes,
    children: props === null || props === void 0 ? void 0 : props.children
  });
};

export default Button;