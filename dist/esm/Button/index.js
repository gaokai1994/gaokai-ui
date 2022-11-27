var _excluded = ["type", "size", "block", "disable"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import "./index.less";
import classNames from 'classnames';
import { jsx as _jsx } from "react/jsx-runtime";

var Button = function Button(props) {
  var _classNames;

  console.log('props', props);

  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$size = props.size,
      size = _props$size === void 0 ? 'middle' : _props$size,
      block = props.block,
      disable = props.disable,
      reset = _objectWithoutProperties(props, _excluded);

  var handleClick = function handleClick(e) {
    var onClick = props.onClick; // e.preventDefault();
    // return;

    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };

  var prefix = 'gk-btn';
  var classes = classNames(prefix, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-").concat(size), size), _defineProperty(_classNames, "".concat(prefix, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefix, "-block"), block), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disable), _classNames));
  return /*#__PURE__*/_jsx("button", _objectSpread(_objectSpread({
    className: classes
  }, reset), {}, {
    onClick: handleClick,
    children: props === null || props === void 0 ? void 0 : props.children
  }));
};

export default Button;