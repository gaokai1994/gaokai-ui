var _excluded = ["size", "className", "direction", "wrap", "children", "align"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useMemo } from 'react';
import classNames from 'classnames';
import "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";

var Space = function Space(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 'middle' : _props$size,
      className = props.className,
      direction = props.direction,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? true : _props$wrap,
      children = props.children,
      _props$align = props.align,
      align = _props$align === void 0 ? 'center' : _props$align,
      reset = _objectWithoutProperties(props, _excluded);

  console.log('ch', reset);
  var prefix = 'gk-space';
  var spaceSize = {
    small: 8,
    middle: 16,
    large: 24
  };

  var _useMemo = useMemo(function () {
    return (Array.isArray(size) ? size : [size, size]).map(function (item) {
      return typeof item === 'string' ? spaceSize[item] : size || 0;
    });
  }, [size]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      horizontralSize = _useMemo2[0],
      verticalSize = _useMemo2[1];

  console.log('@@', horizontralSize, verticalSize);
  var mergedAlign = direction === 'horizontal' ? 'center' : direction;
  var gapStyle = {};
  gapStyle.columnGap = horizontralSize;
  gapStyle.rowGap = verticalSize;

  if (wrap) {
    gapStyle.flexWrap = 'wrap';
  }

  if (direction === 'horizontal') {
    gapStyle.flexDirection = 'row';
  } else if (direction === 'vertical') {
    gapStyle.flexDirection = 'column';
  }

  if (align) {
    console.log('align', align);
    gapStyle.alignItems = align;
  }

  var cn = classNames(prefix, _defineProperty({}, "".concat(prefix, "-align-").concat(mergedAlign), mergedAlign), className);
  var lastIndex = 0;
  var node = Array.isArray(children) ? children === null || children === void 0 ? void 0 : children.map(function (item, index) {
    lastIndex = index;
    return /*#__PURE__*/_jsx("div", {
      style: {
        alignItems: 'center'
      },
      children: item
    }, index);
  }) : children;
  console.log('node', node, _typeof(children));
  return /*#__PURE__*/_jsx("div", {
    className: cn,
    style: _objectSpread({}, gapStyle),
    children: node
  });
};

export default Space;