module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Avatar/index.jsx":
/*!*************************************!*\
  !*** ./components/Avatar/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Avatar/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\Avatar\\index.jsx";



const Avatar = ({
  abbr,
  color,
  dark,
  className,
  photoUrl
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar, {
      [_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dark]: dark
    }, className),
    style: {
      backgroundColor: color
    },
    children: photoUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: photoUrl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 19
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: abbr
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 44
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./components/Avatar/styles.module.scss":
/*!**********************************************!*\
  !*** ./components/Avatar/styles.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"avatar": "styles_avatar__3ORtw",
	"dark": "styles_dark__1SVv-"
};


/***/ }),

/***/ "./components/CalendarSelect/index.jsx":
/*!*********************************************!*\
  !*** ./components/CalendarSelect/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/CalendarSelect/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\CalendarSelect\\index.jsx";



const CalendarSelect = ({
  label,
  value,
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.calendarSelect, className),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 35
      }, undefined), " ", label]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.value,
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CalendarSelect);

/***/ }),

/***/ "./components/CalendarSelect/styles.module.scss":
/*!******************************************************!*\
  !*** ./components/CalendarSelect/styles.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"calendarSelect": "styles_calendarSelect__2E0A0",
	"icon": "styles_icon__19Gyr",
	"label": "styles_label__2se3S",
	"value": "styles_value__3-7TN"
};


/***/ }),

/***/ "./components/Chart/index.jsx":
/*!************************************!*\
  !*** ./components/Chart/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Chart/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useResponsive */ "./hooks/useResponsive.js");
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-portal */ "react-portal");
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_portal__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\Chart\\index.jsx";








const Dot = props => {
  const {
    cx,
    cy,
    payload,
    value,
    chartRef,
    fill,
    formatValue
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
      r: "5.5",
      stroke: "white",
      strokeWidth: "5",
      fill: fill,
      className: "recharts-dot recharts-line-dot",
      cx: cx,
      cy: cy,
      r: 10,
      opacity: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_portal__WEBPACK_IMPORTED_MODULE_7__["Portal"], {
      node: chartRef.current,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tooltip,
        style: {
          left: cx,
          top: cy - 18
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tooltipLabel,
          children: [payload.date, "`20"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tooltipValue,
          children: formatValue(value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tooltipArrow
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

const TooltipContent = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 47,
  columnNumber: 30
}, undefined);

const UNIT_FORMATTER = {
  [_constants__WEBPACK_IMPORTED_MODULE_5__["CHART_UNIT"].NUMBER]: _utils_format__WEBPACK_IMPORTED_MODULE_3__["formatNumberShort"],
  [_constants__WEBPACK_IMPORTED_MODULE_5__["CHART_UNIT"].TIME]: _utils_format__WEBPACK_IMPORTED_MODULE_3__["formatMinutes"],
  [_constants__WEBPACK_IMPORTED_MODULE_5__["CHART_UNIT"].PERCENTAGE]: value => value + '%'
};
const VALUE_FORMATTER = {
  [_constants__WEBPACK_IMPORTED_MODULE_5__["CHART_UNIT"].NUMBER]: _utils_format__WEBPACK_IMPORTED_MODULE_3__["formatNumber"],
  [_constants__WEBPACK_IMPORTED_MODULE_5__["CHART_UNIT"].TIME]: _utils_format__WEBPACK_IMPORTED_MODULE_3__["formatMinutes"],
  [_constants__WEBPACK_IMPORTED_MODULE_5__["CHART_UNIT"].PERCENTAGE]: value => value + '%'
};

const Chart = ({
  data,
  color,
  unit = _constants__WEBPACK_IMPORTED_MODULE_5__["CHART_UNIT"].NUMBER
}) => {
  console.log(data);
  const chartRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    isMobile
  } = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const yAxisFormatter = UNIT_FORMATTER[unit];
  const formatValue = VALUE_FORMATTER[unit];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.chart,
    ref: chartRef,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
      height: "100%",
      width: "100%",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_2__["LineChart"], {
        data: data,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_2__["XAxis"], {
          dataKey: "date",
          type: "category",
          domain: ['dataMin', 'dataMax'],
          axisLine: false,
          tickLine: false,
          tickFormatter: value => value.toUpperCase(),
          padding: {
            left: 33,
            right: 33
          },
          interval: "preserveStart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined), !isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_2__["YAxis"], {
          dataKey: "value",
          domain: ['dataMin', dataMax => dataMax * 1.1],
          interval: 0,
          axisLine: false,
          tickLine: false,
          scale: "linear",
          orientation: "right",
          tickFormatter: yAxisFormatter,
          padding: {
            bottom: 23,
            top: 13
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          content: TooltipContent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_2__["Line"], {
          dataKey: "value",
          type: "linear",
          stroke: color,
          strokeWidth: 3,
          dot: {
            r: 0,
            stroke: 0
          },
          activeDot: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Dot, {
            chartRef: chartRef,
            fill: color,
            formatValue: formatValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./components/Chart/styles.module.scss":
/*!*********************************************!*\
  !*** ./components/Chart/styles.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"chart": "styles_chart__3MntX",
	"tooltip": "styles_tooltip__2GL5Y",
	"tooltipLabel": "styles_tooltipLabel__2ay-z",
	"tooltipValue": "styles_tooltipValue__NBsyz",
	"tooltipArrow": "styles_tooltipArrow__3Btvh"
};


/***/ }),

/***/ "./components/ChartLegend/index.jsx":
/*!******************************************!*\
  !*** ./components/ChartLegend/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/ChartLegend/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\ChartLegend\\index.jsx";



const ChartLegend = ({
  items,
  selected
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.chartLegend,
    children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item, {
        [_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selected]: item.label === selected
      }),
      style: item.label === selected ? {
        backgroundColor: item.color
      } : {},
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.circle,
        style: {
          borderColor: item.color
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
        children: item.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined)]
    }, item.label, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ChartLegend);

/***/ }),

/***/ "./components/ChartLegend/styles.module.scss":
/*!***************************************************!*\
  !*** ./components/ChartLegend/styles.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"chartLegend": "styles_chartLegend__2Katf",
	"label": "styles_label__1AQnH",
	"selected": "styles_selected__3_rZU",
	"item": "styles_item__2MBpX",
	"circle": "styles_circle__3Dtc1"
};


/***/ }),

/***/ "./components/DataItem/index.jsx":
/*!***************************************!*\
  !*** ./components/DataItem/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/DataItem/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HelpTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HelpTooltip */ "./components/HelpTooltip/index.jsx");

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\DataItem\\index.jsx";




const DataItem = ({
  name,
  value,
  icon,
  delta,
  description
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dataItem,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HelpTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: name,
        description: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.data,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon, _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[icon])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.value,
        children: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.delta, delta >= 0 ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.positive : _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.negative),
        children: [delta > 0 ? '+' : '', delta, "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DataItem);

/***/ }),

/***/ "./components/DataItem/styles.module.scss":
/*!************************************************!*\
  !*** ./components/DataItem/styles.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"name": "styles_name__37ck2",
	"data": "styles_data__1E6E9",
	"icon": "styles_icon__b4N-y",
	"trendUp": "styles_trendUp__3k-Pn",
	"clock": "styles_clock__3iNb-",
	"branches": "styles_branches__2rUOp",
	"value": "styles_value__ozwPU",
	"delta": "styles_delta__16Yv1",
	"positive": "styles_positive__2FyYU",
	"negative": "styles_negative__1zaoi"
};


/***/ }),

/***/ "./components/DataList/index.jsx":
/*!***************************************!*\
  !*** ./components/DataList/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/DataList/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar */ "./components/Avatar/index.jsx");

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\DataList\\index.jsx";




const DataList = ({
  items
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
          abbr: item.abbr,
          color: item.color,
          dark: item.dark
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name,
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.value,
        children: Object(_utils_format__WEBPACK_IMPORTED_MODULE_2__["formatNumber"])(item.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined)]
    }, item.name, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DataList);

/***/ }),

/***/ "./components/DataList/styles.module.scss":
/*!************************************************!*\
  !*** ./components/DataList/styles.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "styles_item__2oAjX",
	"label": "styles_label__34JJY",
	"name": "styles_name__1ohxB",
	"value": "styles_value__Cb5FC"
};


/***/ }),

/***/ "./components/Footer/index.jsx":
/*!*************************************!*\
  !*** ./components/Footer/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Footer/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\Footer\\index.jsx";


const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    children: "\xA9 All right reserved. BetterMeter"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/styles.module.scss":
/*!**********************************************!*\
  !*** ./components/Footer/styles.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "styles_footer__3DOeq"
};


/***/ }),

/***/ "./components/HelpTooltip/index.jsx":
/*!******************************************!*\
  !*** ./components/HelpTooltip/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/HelpTooltip/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-popper */ "react-popper");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\HelpTooltip\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const HelpTooltip = ({
  title,
  description
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: referenceElement,
    1: setReferenceElement
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: popperElement,
    1: setPopperElement
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: arrowElement,
    1: setArrowElement
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    styles: popperStyles,
    attributes
  } = Object(react_popper__WEBPACK_IMPORTED_MODULE_3__["usePopper"])(referenceElement, popperElement, {
    placement: 'top',
    modifiers: [{
      name: 'flip',
      options: {
        fallbackPlacements: ['top']
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 10]
      }
    }, {
      name: 'arrow',
      // padding should be equal to border-radius of the dropdown
      options: {
        element: arrowElement,
        padding: 7
      }
    }, {
      name: 'preventOverflow',
      options: {
        // padding from browser edges
        padding: 16
      }
    }]
  });
  const close = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const open = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onMouseEnter: open,
      onMouseLeave: close,
      role: "button",
      tabIndex: 0,
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.handle,
      ref: setReferenceElement
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.popover,
      ref: setPopperElement,
      style: popperStyles.popper
    }, attributes.popper), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contentTitle,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.contentDescription,
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: setArrowElement,
        style: popperStyles.arrow,
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.popoverArrow
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, undefined)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (HelpTooltip);

/***/ }),

/***/ "./components/HelpTooltip/styles.module.scss":
/*!***************************************************!*\
  !*** ./components/HelpTooltip/styles.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"handle": "styles_handle__Kvm8C",
	"popover": "styles_popover__2Z54W",
	"popoverArrow": "styles_popoverArrow__1HUk0",
	"content": "styles_content__23AS6",
	"contentTitle": "styles_contentTitle__1YUg5",
	"contentDescription": "styles_contentDescription__2O_8O"
};


/***/ }),

/***/ "./components/MainMenu/index.jsx":
/*!***************************************!*\
  !*** ./components/MainMenu/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/MainMenu/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\MainMenu\\index.jsx";


const menuItems = [{
  label: 'Dashboard',
  icon: 'dashboard',
  active: true
}, {
  label: 'Sites',
  icon: 'sites'
}, {
  label: 'Campaigns',
  icon: 'campaigns'
}, {
  label: 'Analytics',
  icon: 'analytics'
}, {
  label: 'Live View',
  icon: 'live-view'
}, {
  label: 'Users',
  icon: 'users'
}, {
  label: 'Organizations',
  icon: 'organizations'
}, {
  label: 'Settings',
  icon: 'settings'
}];

const MainMenu = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mainMenu,
    children: menuItems.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item, {
        [_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active]: item.active
      }),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
        style: {
          backgroundImage: `url(/images/icon-menu-${item.icon}.svg)`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, undefined), item.label]
    }, item.label, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ }),

/***/ "./components/MainMenu/styles.module.scss":
/*!************************************************!*\
  !*** ./components/MainMenu/styles.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainMenu": "styles_mainMenu__MEU8P",
	"item": "styles_item__JPJX-",
	"active": "styles_active__2JXwQ",
	"icon": "styles_icon__3JGha"
};


/***/ }),

/***/ "./components/NewCard/index.jsx":
/*!**************************************!*\
  !*** ./components/NewCard/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/NewCard/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\NewCard\\index.jsx";


const NewCard = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.newCard
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NewCard);

/***/ }),

/***/ "./components/NewCard/styles.module.scss":
/*!***********************************************!*\
  !*** ./components/NewCard/styles.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"newCard": "styles_newCard__2BHiZ"
};


/***/ }),

/***/ "./components/NotificationsIcon/index.jsx":
/*!************************************************!*\
  !*** ./components/NotificationsIcon/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/NotificationsIcon/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\NotificationsIcon\\index.jsx";


const NotificationsIcon = ({
  count
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.notificationsIcon,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.count,
      children: count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationsIcon);

/***/ }),

/***/ "./components/NotificationsIcon/styles.module.scss":
/*!*********************************************************!*\
  !*** ./components/NotificationsIcon/styles.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"notificationsIcon": "styles_notificationsIcon__1Ijsi",
	"icon": "styles_icon__vUz9A",
	"count": "styles_count__cQsNw"
};


/***/ }),

/***/ "./components/PageContainer/index.jsx":
/*!********************************************!*\
  !*** ./components/PageContainer/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/PageContainer/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\PageContainer\\index.jsx";


const PageContainer = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pageContainer,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PageContainer);

/***/ }),

/***/ "./components/PageContainer/styles.module.scss":
/*!*****************************************************!*\
  !*** ./components/PageContainer/styles.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pageContainer": "styles_pageContainer__1yY1e"
};


/***/ }),

/***/ "./components/PageHeader/index.jsx":
/*!*****************************************!*\
  !*** ./components/PageHeader/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/PageHeader/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\PageHeader\\index.jsx";


const PageHeader = ({
  title,
  aside
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pageHeader,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), aside]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ }),

/***/ "./components/PageHeader/styles.module.scss":
/*!**************************************************!*\
  !*** ./components/PageHeader/styles.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pageHeader": "styles_pageHeader__1dMcH",
	"title": "styles_title__3WAaB"
};


/***/ }),

/***/ "./components/SearchIcon/index.jsx":
/*!*****************************************!*\
  !*** ./components/SearchIcon/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SearchIcon/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\SearchIcon\\index.jsx";


const SearchIcon = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchIcon
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchIcon);

/***/ }),

/***/ "./components/SearchIcon/styles.module.scss":
/*!**************************************************!*\
  !*** ./components/SearchIcon/styles.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchIcon": "styles_searchIcon__2l3gJ"
};


/***/ }),

/***/ "./components/Select/index.jsx":
/*!*************************************!*\
  !*** ./components/Select/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Select/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-outside-click-handler */ "react-outside-click-handler");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-popper */ "react-popper");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\Select\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const sameWidth = {
  name: 'sameWidth',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  fn: ({
    state
  }) => {
    state.styles.popper.width = `${state.rects.reference.width + 35}px`;
  },
  effect: ({
    state
  }) => {
    state.elements.popper.style.width = `${state.elements.reference.offsetWidth + 35}px`;
  }
};

const DropdownMenu = ({
  options,
  value,
  label,
  onChange,
  theme,
  className,
  full,
  optionComponent: OptionComponent,
  handleClassName
}) => {
  const {
    0: valueWidth,
    1: setValueWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: referenceElement,
    1: setReferenceElement
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: popperElement,
    1: setPopperElement
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    styles: popperStyles,
    attributes
  } = Object(react_popper__WEBPACK_IMPORTED_MODULE_5__["usePopper"])(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [{
      name: 'flip',
      options: {
        fallbackPlacements: ['bottom-start']
      }
    }, {
      name: 'offset',
      options: {
        offset: [-20, -46]
      }
    }, {
      name: 'preventOverflow',
      options: {
        // padding from browser edges
        padding: 16
      }
    }, sameWidth]
  });
  const close = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const toggle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);
  const changeValue = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(option => () => {
    close();
    onChange && onChange(option.value);
  }, [close]);
  const withColor = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => lodash__WEBPACK_IMPORTED_MODULE_2___default.a.some(options, option => option.color));
  const valueLabel = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(options, {
      value
    }), 'label');
  }, [options, value]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let width = 'auto';

    if (full) {
      const optionWidths = options.map(option => Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getTextWidth"])(option.label, "500 16px 'DM Sans', Arial, Helvetica, sans-serif"));
      width = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.max(optionWidths);
    }

    setValueWidth(width);
  }, [setValueWidth, options, full]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.select, {
      [_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[theme]]: !!theme,
      [_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.open]: isOpen,
      [_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.full]: full
    }, className),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onOutsideClick: close,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: toggle,
        role: "button",
        tabIndex: 0,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.handle, handleClassName),
        ref: setReferenceElement,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.label,
          children: [label, ":"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, undefined), !!valueLabel && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.valueWrapper,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.value,
            style: {
              width: valueWidth
            },
            children: withColor ? '' : valueLabel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.popover,
        ref: setPopperElement,
        style: popperStyles.popper
      }, attributes.popper), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.list,
          children: options.map(option => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: changeValue(option),
            role: "button",
            tabIndex: 0,
            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.option, {
              [_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.selected]: option.value === value,
              [_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withColor]: withColor
            }),
            children: OptionComponent ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OptionComponent, {
              option: option,
              value: value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 21
            }, undefined) : option.label
          }, option.label, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DropdownMenu);

/***/ }),

/***/ "./components/Select/styles.module.scss":
/*!**********************************************!*\
  !*** ./components/Select/styles.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"select": "styles_select__3ByPZ",
	"handle": "styles_handle__2CtZs",
	"valueWrapper": "styles_valueWrapper__bBuuq",
	"value": "styles_value__18YUG",
	"popover": "styles_popover__2qU2R",
	"full": "styles_full__3vP3Q",
	"list": "styles_list__1c7WN",
	"option": "styles_option__1Ugro",
	"selected": "styles_selected__3juAo",
	"dark": "styles_dark__nTTyB",
	"open": "styles_open__14rMj"
};


/***/ }),

/***/ "./components/SummaryCard/index.jsx":
/*!******************************************!*\
  !*** ./components/SummaryCard/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/SummaryCard/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ThreeDotsMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ThreeDotsMenu */ "./components/ThreeDotsMenu/index.jsx");
/* harmony import */ var _DataList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DataList */ "./components/DataList/index.jsx");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Select */ "./components/Select/index.jsx");

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\SummaryCard\\index.jsx";






const SummaryCard = ({
  title,
  data,
  filter
}) => {
  const {
    0: filterValue,
    1: setFilterValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(filter.value || filter.options[0].value);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.summaryCard,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.threeDotsMenu,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ThreeDotsMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
        options: [{
          label: 'Edit',
          action: () => {}
        }, {
          label: 'Refresh',
          action: () => {}
        }]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), !!filter && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.filter,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
        options: filter.options,
        label: filter.label,
        value: filterValue,
        onChange: setFilterValue,
        handleClassName: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.filterSelectHandle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DataList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SummaryCard);

/***/ }),

/***/ "./components/SummaryCard/styles.module.scss":
/*!***************************************************!*\
  !*** ./components/SummaryCard/styles.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"summaryCard": "styles_summaryCard__-vuFO",
	"title": "styles_title__2PKwU",
	"threeDotsMenu": "styles_threeDotsMenu__15dM8",
	"filter": "styles_filter__kk8UW",
	"filterSelectHandle": "styles_filterSelectHandle__1Ku2E"
};


/***/ }),

/***/ "./components/Tabs/index.jsx":
/*!***********************************!*\
  !*** ./components/Tabs/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Tabs/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\Tabs\\index.jsx";




const Tabs = ({
  children,
  selected,
  onTabClick
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tabsWrapper,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tabs,
      children: react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, child => child && child.props.tab ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tab, {
          [_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.selected]: child.props.tab === selected
        }),
        onClick: () => onTabClick(child.props.tab),
        children: child
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined) : child)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

Tabs.Tab = () => {};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./components/Tabs/styles.module.scss":
/*!********************************************!*\
  !*** ./components/Tabs/styles.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tabsWrapper": "styles_tabsWrapper__18JDW",
	"tabs": "styles_tabs__1XOqm",
	"tab": "styles_tab__2Tftm",
	"selected": "styles_selected__zZQQW"
};


/***/ }),

/***/ "./components/ThreeDotsMenu/index.jsx":
/*!********************************************!*\
  !*** ./components/ThreeDotsMenu/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/ThreeDotsMenu/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-outside-click-handler */ "react-outside-click-handler");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-popper */ "react-popper");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\ThreeDotsMenu\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ThreeDotsMenu = ({
  options
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: referenceElement,
    1: setReferenceElement
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: popperElement,
    1: setPopperElement
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    styles: popperStyles,
    attributes
  } = Object(react_popper__WEBPACK_IMPORTED_MODULE_4__["usePopper"])(referenceElement, popperElement, {
    placement: 'bottom-end',
    modifiers: [{
      name: 'flip',
      options: {
        fallbackPlacements: ['bottom-end']
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, -40]
      }
    }, {
      name: 'preventOverflow',
      options: {
        // padding from browser edges
        padding: 16
      }
    }]
  });
  const close = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const toggle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);
  const closeOnAction = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(action => () => {
    close();
    action && action();
  }, [close]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onOutsideClick: close,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: toggle,
      role: "button",
      tabIndex: 0,
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.handle,
      ref: setReferenceElement
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.popover,
      ref: setPopperElement,
      style: popperStyles.popper
    }, attributes.popper), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.list,
        children: options.map(option => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: closeOnAction(option.action),
          role: "button",
          tabIndex: 0,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.option,
          children: option.label
        }, option.label, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: close,
        role: "button",
        tabIndex: 0,
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.handleClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, undefined)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ThreeDotsMenu);

/***/ }),

/***/ "./components/ThreeDotsMenu/styles.module.scss":
/*!*****************************************************!*\
  !*** ./components/ThreeDotsMenu/styles.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"handle": "styles_handle__3pmMh",
	"handleClose": "styles_handleClose__3REeF",
	"popover": "styles_popover__2PhDj",
	"list": "styles_list__2umRX",
	"option": "styles_option__1yLMB"
};


/***/ }),

/***/ "./components/TopBar/index.jsx":
/*!*************************************!*\
  !*** ./components/TopBar/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationsIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NotificationsIcon */ "./components/NotificationsIcon/index.jsx");
/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchIcon */ "./components/SearchIcon/index.jsx");
/* harmony import */ var _UserMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserMenu */ "./components/UserMenu/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/TopBar/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\TopBar\\index.jsx";





const TopBar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.topBar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mobileMenuWrapper,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.mobileMenuIcon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/images/logo.svg",
      alt: "logo",
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rightPanel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.search,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.notifications,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NotificationsIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
          count: 9
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.userMenu,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UserMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
          photoUrl: "/assets/avatar.png",
          firstName: "Adrian",
          lastName: "Villa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./components/TopBar/styles.module.scss":
/*!**********************************************!*\
  !*** ./components/TopBar/styles.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"topBar": "styles_topBar__n4rkU",
	"rightPanel": "styles_rightPanel__1EIgX",
	"notifications": "styles_notifications__2Ypmo",
	"search": "styles_search__1pf-_",
	"userMenu": "styles_userMenu__MoxES",
	"mobileMenuWrapper": "styles_mobileMenuWrapper__3xVWB",
	"mobileMenuIcon": "styles_mobileMenuIcon__17yle",
	"logo": "styles_logo__3DLKG"
};


/***/ }),

/***/ "./components/TopNavigation/index.jsx":
/*!********************************************!*\
  !*** ./components/TopNavigation/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TopBar */ "./components/TopBar/index.jsx");
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MainMenu */ "./components/MainMenu/index.jsx");

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\TopNavigation\\index.jsx";



const TopNavigation = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TopBar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TopNavigation);

/***/ }),

/***/ "./components/TrendsList/index.jsx":
/*!*****************************************!*\
  !*** ./components/TrendsList/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/TrendsList/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar */ "./components/Avatar/index.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\TrendsList\\index.jsx";





const TrendsList = ({
  items
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dataItem,
    children: items.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
          abbr: item.abbr,
          color: item.color,
          dark: item.dark,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.type, _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[item.type])
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.value,
        children: Object(_utils_format__WEBPACK_IMPORTED_MODULE_2__["formatNumber"])(item.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TrendsList);

/***/ }),

/***/ "./components/TrendsList/styles.module.scss":
/*!**************************************************!*\
  !*** ./components/TrendsList/styles.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "styles_item__3gQI8",
	"label": "styles_label__2IsG8",
	"type": "styles_type__3ZyZW",
	"up": "styles_up__3KGE8",
	"good": "styles_good__3WWDa",
	"bad": "styles_bad__2KdcB",
	"hot": "styles_hot__3riIz",
	"value": "styles_value__Whmti",
	"avatar": "styles_avatar__bXECh"
};


/***/ }),

/***/ "./components/UserMenu/index.jsx":
/*!***************************************!*\
  !*** ./components/UserMenu/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatar */ "./components/Avatar/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/UserMenu/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");

var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\components\\UserMenu\\index.jsx";





const UserMenu = ({
  photoUrl,
  firstName,
  lastName
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userMenu,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      photoUrl: photoUrl,
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.avatar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fullName,
      children: Object(_utils_format__WEBPACK_IMPORTED_MODULE_4__["formatFullName"])(firstName, lastName)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.arrow
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UserMenu);

/***/ }),

/***/ "./components/UserMenu/styles.module.scss":
/*!************************************************!*\
  !*** ./components/UserMenu/styles.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userMenu": "styles_userMenu__CVFKZ",
	"avatar": "styles_avatar__Y4P9R",
	"fullName": "styles_fullName__HN-y7",
	"arrow": "styles_arrow__wt0F0"
};


/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: MOST_ACTIVE_SITES_FILTER_OPTIONS, MOST_VISITED_SITES_FILTER_OPTIONS, TOP_EVENTS_FILTER_OPTIONS, MEDIA_QUERY, CHART_UNIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOST_ACTIVE_SITES_FILTER_OPTIONS", function() { return MOST_ACTIVE_SITES_FILTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOST_VISITED_SITES_FILTER_OPTIONS", function() { return MOST_VISITED_SITES_FILTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_EVENTS_FILTER_OPTIONS", function() { return TOP_EVENTS_FILTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_QUERY", function() { return MEDIA_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHART_UNIT", function() { return CHART_UNIT; });
const MOST_ACTIVE_SITES_FILTER_OPTIONS = [{
  label: 'All',
  value: 'All'
}, {
  label: 'Glyphy',
  value: 'Glyphy'
}, {
  label: 'DesignStripe',
  value: 'DesignStripe'
}, {
  label: 'DesignValley',
  value: 'DesignValley'
}, {
  label: 'Neueubel',
  value: 'Neueubel'
}, {
  label: 'Last Year',
  value: 'Last Year'
}];
const MOST_VISITED_SITES_FILTER_OPTIONS = [{
  label: 'Today',
  value: 'Today'
}, {
  label: 'Yesterday',
  value: 'Yesterday'
}, {
  label: 'Last Week',
  value: 'Last Week'
}, {
  label: 'Last Month',
  value: 'Last Month'
}, {
  label: 'Last Year',
  value: 'Last Year'
}];
const TOP_EVENTS_FILTER_OPTIONS = [{
  label: 'Recents',
  value: 'Recents'
}, {
  label: 'Yesterday',
  value: 'Yesterday'
}, {
  label: 'Last Week',
  value: 'Last Week'
}, {
  label: 'Last Month',
  value: 'Last Month'
}, {
  label: 'Last Year',
  value: 'Last Year'
}, {
  label: 'All',
  value: 'All'
}];
const MEDIA_QUERY = {
  MOBILE: {
    query: '(max-width: 1023px)'
  }
};
const CHART_UNIT = {
  NUMBER: 'number',
  TIME: 'time',
  PERCENTAGE: 'percentage'
};

/***/ }),

/***/ "./hooks/useResponsive.js":
/*!********************************!*\
  !*** ./hooks/useResponsive.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants/index.js");




const useResponsive = () => {
  const {
    0: isClient,
    1: setIsClient
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])(_constants__WEBPACK_IMPORTED_MODULE_2__["MEDIA_QUERY"].MOBILE);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    if (false) {}
  }, []);
  return {
    isMobile: isClient ? isMobile : false
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useResponsive);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_TopNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TopNavigation */ "./components/TopNavigation/index.jsx");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PageHeader */ "./components/PageHeader/index.jsx");
/* harmony import */ var _components_PageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageContainer */ "./components/PageContainer/index.jsx");
/* harmony import */ var _components_SummaryCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SummaryCard */ "./components/SummaryCard/index.jsx");
/* harmony import */ var _components_TrendsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TrendsList */ "./components/TrendsList/index.jsx");
/* harmony import */ var _components_NewCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NewCard */ "./components/NewCard/index.jsx");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Select */ "./components/Select/index.jsx");
/* harmony import */ var _components_CalendarSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CalendarSelect */ "./components/CalendarSelect/index.jsx");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Tabs */ "./components/Tabs/index.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _components_DataItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/DataItem */ "./components/DataItem/index.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.jsx");
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Chart */ "./components/Chart/index.jsx");
/* harmony import */ var _components_ChartLegend__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/ChartLegend */ "./components/ChartLegend/index.jsx");
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../hooks/useResponsive */ "./hooks/useResponsive.js");


var _jsxFileName = "E:\\WORK\\2020_11\\BetterMeter-Test-React-Next\\pages\\index.js";


















const TABS = {
  PAGE_VIEW: 'pageView',
  UNIQUE_USERS: 'uniqueUsers',
  AVERAGE_TIME: 'averageTime',
  BOUNCE_RATE: 'bounceRate'
};
const TAB_CHART_UNITS = {
  [TABS.PAGE_VIEW]: _constants__WEBPACK_IMPORTED_MODULE_13__["CHART_UNIT"].NUMBER,
  [TABS.UNIQUE_USERS]: _constants__WEBPACK_IMPORTED_MODULE_13__["CHART_UNIT"].NUMBER,
  [TABS.AVERAGE_TIME]: _constants__WEBPACK_IMPORTED_MODULE_13__["CHART_UNIT"].TIME,
  [TABS.BOUNCE_RATE]: _constants__WEBPACK_IMPORTED_MODULE_13__["CHART_UNIT"].PERCENTAGE
};

const SiteOption = ({
  option,
  value
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.siteOption,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.siteOptionColor,
    style: option.value === value ? {
      backgroundColor: option.color
    } : {}
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined), option.label]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 41,
  columnNumber: 3
}, undefined);

function Home({
  data
}) {
  const {
    isMobile
  } = Object(_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_18__["default"])();
  const {
    0: siteFilter,
    1: setSiteFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Glyphy.io');
  const {
    0: eventFilter,
    1: setEventFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('All');
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(TABS.PAGE_VIEW);
  const changeTab = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(newTab => {
    setTab(newTab);
  }, [setTab]);
  const selectSiteFilter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(newSiteFilter => {
    setSiteFilter(newSiteFilter);
  }, [setSiteFilter]);
  const selectEventFilter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(newEventFilter => {
    setEventFilter(newEventFilter);
  }, [setEventFilter]);
  const siteData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => lodash__WEBPACK_IMPORTED_MODULE_2___default.a.find(data.sites, {
    name: siteFilter
  }), [data.sites, siteFilter]);
  const sitesFilterOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => data.sites.map(site => ({
    label: site.name,
    color: site.color,
    value: site.name
  })), [data.sites]);

  const dataContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.data,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dataList,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TrendsList__WEBPACK_IMPORTED_MODULE_8__["default"], {
        items: data.trends
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dataSeeAll,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "See All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dataChart,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChartLegend__WEBPACK_IMPORTED_MODULE_17__["default"], {
        selected: siteFilter,
        items: sitesFilterOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Chart__WEBPACK_IMPORTED_MODULE_16__["default"], {
        color: siteData.color,
        data: siteData[tab],
        unit: TAB_CHART_UNITS[tab]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)]
  }, "data", true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TopNavigation__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PageContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Analytics",
        aside: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.filters,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
            label: "Sites",
            value: siteFilter,
            onChange: selectSiteFilter,
            options: sitesFilterOptions,
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.filterSelect,
            theme: "dark",
            optionComponent: SiteOption,
            full: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
            label: "Events",
            value: eventFilter,
            onChange: selectEventFilter,
            options: _constants__WEBPACK_IMPORTED_MODULE_13__["TOP_EVENTS_FILTER_OPTIONS"],
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.filterSelect,
            full: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CalendarSelect__WEBPACK_IMPORTED_MODULE_11__["default"], {
            label: "Date",
            value: "Aug 7 - Aug 15 2020",
            className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.filterSelect
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Tabs__WEBPACK_IMPORTED_MODULE_12__["default"], {
        selected: tab,
        onTabClick: changeTab,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DataItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
          name: "Pageviews",
          icon: "trendUp",
          value: "223.5k",
          description: "an instance of a user visiting a particular page on a website.",
          delta: 15,
          tab: TABS.PAGE_VIEW
        }, TABS.PAGE_VIEW, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), isMobile && tab === TABS.PAGE_VIEW && dataContent, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DataItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
          name: "Unique Users",
          icon: "trendUp",
          value: "74.858",
          description: "an instance of a user visiting a particular page on a website.",
          delta: -15,
          tab: TABS.UNIQUE_USERS
        }, TABS.UNIQUE_USERS, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this), isMobile && tab === TABS.UNIQUE_USERS && dataContent, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DataItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
          name: "Average visit time",
          icon: "clock",
          value: "01:45",
          description: "an instance of a user visiting a particular page on a website.",
          delta: 15,
          tab: TABS.AVERAGE_TIME
        }, TABS.AVERAGE_TIME, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this), isMobile && tab === TABS.AVERAGE_TIME && dataContent, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DataItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
          name: "Bounce Rate",
          icon: "branches",
          value: "25.7%",
          description: "an instance of a user visiting a particular page on a website.",
          delta: -15,
          tab: TABS.BOUNCE_RATE
        }, TABS.BOUNCE_RATE, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, this), isMobile && tab === TABS.BOUNCE_RATE && dataContent]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this), !isMobile && dataContent, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.summaryCards,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SummaryCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: "Most Active Sites",
          data: data.mostActiveSites,
          filter: {
            label: 'Sites',
            options: _constants__WEBPACK_IMPORTED_MODULE_13__["MOST_ACTIVE_SITES_FILTER_OPTIONS"]
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SummaryCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: "Most Visited Sites",
          data: data.mostVisitedSites,
          filter: {
            label: 'Sort',
            options: _constants__WEBPACK_IMPORTED_MODULE_13__["MOST_VISITED_SITES_FILTER_OPTIONS"]
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SummaryCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: "Top Events",
          data: data.topEvents,
          filter: {
            label: 'Events',
            options: _constants__WEBPACK_IMPORTED_MODULE_13__["TOP_EVENTS_FILTER_OPTIONS"]
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NewCard__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
async function getStaticProps() {
  const mostVisitedSites = [{
    abbr: 'DK',
    color: '#3DDDAA',
    name: 'Drawkit',
    value: 56156
  }, {
    abbr: '4/10',
    color: '#FAF8F3',
    dark: true,
    name: 'Yesterday',
    value: 1374
  }, {
    abbr: '1-7',
    color: '#E6F5FA',
    dark: true,
    name: 'Last Week',
    value: 20748
  }, {
    abbr: 'SEP',
    color: '#F0F4FF',
    dark: true,
    name: 'Last Month',
    value: 32884
  }, {
    abbr: '2019',
    color: '#EFFCF0',
    dark: true,
    name: 'Last Year',
    value: 182874
  }];
  const mostActiveSites = [{
    abbr: 'GL',
    color: '#FF9900',
    name: 'Glyphy',
    value: 6648
  }, {
    abbr: 'DS',
    color: '#127BF5',
    name: 'DesignStripe',
    value: 1374
  }, {
    abbr: 'DV',
    color: '#F73859',
    name: 'DesignValley',
    value: 20748
  }, {
    abbr: 'DK',
    color: '#3DDDAA',
    name: 'Neueubel',
    value: 32884
  }, {
    abbr: 'DS',
    color: '#127BF5',
    name: 'Last Year',
    value: 182874
  }];
  const topEvents = [{
    abbr: '5/10',
    color: '#FF9900',
    name: 'Today',
    value: 56156
  }, {
    abbr: '4/10',
    color: '#FAF8F3',
    dark: true,
    name: 'Yesterday',
    value: 1374
  }, {
    abbr: '1-7',
    color: '#E6F5FA',
    dark: true,
    name: 'Last Week',
    value: 20748
  }, {
    abbr: 'SEP',
    color: '#F0F4FF',
    dark: true,
    name: 'Last Month',
    value: 32884
  }, {
    abbr: '2019',
    color: '#EFFCF0',
    dark: true,
    name: 'Last Year',
    value: 182874
  }];
  const trends = [{
    abbr: 'GL',
    color: '#FF9900',
    type: 'up',
    value: 264738
  }, {
    abbr: 'DS',
    color: '#127BF5',
    type: 'good',
    value: 64738
  }, {
    abbr: 'GL',
    color: '#FF9900',
    type: 'up',
    value: 23738
  }, {
    abbr: 'DK',
    color: '#3DDDAA',
    type: 'hot',
    value: 8837
  }, {
    abbr: 'DS',
    color: '#127BF5',
    type: 'bad',
    value: 5375
  }, {
    abbr: 'NB',
    color: '#84868A',
    type: 'up',
    value: 3923
  }];
  const sites = [{
    name: 'DrawKit',
    color: '#3DDDAA',
    pageView: [{
      value: 0,
      date: 'Jan'
    }, {
      value: 5000,
      date: 'Feb'
    }, {
      value: 4000,
      date: 'Mar'
    }, {
      value: 5000,
      date: 'Apr'
    }, {
      value: 4500,
      date: 'May'
    }, {
      value: 4700,
      date: 'Jun'
    }, {
      value: 5200,
      date: 'Jul'
    }, {
      value: 12943,
      date: 'Aug'
    }, {
      value: 5000,
      date: 'Sep'
    }, {
      value: 6000,
      date: 'Oct'
    }, {
      value: 5000,
      date: 'Nov'
    }, {
      value: 13500,
      date: 'Dec'
    }],
    uniqueUsers: [{
      value: 0,
      date: 'Jan'
    }, {
      value: 2500,
      date: 'Feb'
    }, {
      value: 2000,
      date: 'Mar'
    }, {
      value: 3000,
      date: 'Apr'
    }, {
      value: 2500,
      date: 'May'
    }, {
      value: 2700,
      date: 'Jun'
    }, {
      value: 3200,
      date: 'Jul'
    }, {
      value: 7943,
      date: 'Aug'
    }, {
      value: 3000,
      date: 'Sep'
    }, {
      value: 2000,
      date: 'Oct'
    }, {
      value: 3000,
      date: 'Nov'
    }, {
      value: 9500,
      date: 'Dec'
    }],
    averageTime: [{
      value: 105,
      date: 'Jan'
    }, {
      value: 70,
      date: 'Feb'
    }, {
      value: 220,
      date: 'Mar'
    }, {
      value: 179,
      date: 'Apr'
    }, {
      value: 150,
      date: 'May'
    }, {
      value: 110,
      date: 'Jun'
    }, {
      value: 90,
      date: 'Jul'
    }, {
      value: 220,
      date: 'Aug'
    }, {
      value: 280,
      date: 'Sep'
    }, {
      value: 350,
      date: 'Oct'
    }, {
      value: 150,
      date: 'Nov'
    }, {
      value: 200,
      date: 'Dec'
    }],
    bounceRate: [{
      value: 25.7,
      date: 'Jan'
    }, {
      value: 10,
      date: 'Feb'
    }, {
      value: 13,
      date: 'Mar'
    }, {
      value: 34,
      date: 'Apr'
    }, {
      value: 19,
      date: 'May'
    }, {
      value: 25,
      date: 'Jun'
    }, {
      value: 37,
      date: 'Jul'
    }, {
      value: 15,
      date: 'Aug'
    }, {
      value: 19,
      date: 'Sep'
    }, {
      value: 0,
      date: 'Oct'
    }, {
      value: 15,
      date: 'Nov'
    }, {
      value: 20,
      date: 'Dec'
    }]
  }, {
    name: 'DesignStripe',
    color: '#1B7FF3',
    pageView: [{
      value: 12313,
      date: 'Jan'
    }, {
      value: 2323,
      date: 'Feb'
    }, {
      value: 23423,
      date: 'Mar'
    }, {
      value: 4000,
      date: 'Apr'
    }, {
      value: 1000,
      date: 'May'
    }, {
      value: 3000,
      date: 'Jun'
    }, {
      value: 4000,
      date: 'Jul'
    }, {
      value: 10000,
      date: 'Aug'
    }, {
      value: 9000,
      date: 'Sep'
    }, {
      value: 12000,
      date: 'Oct'
    }, {
      value: 10000,
      date: 'Nov'
    }, {
      value: 13500,
      date: 'Dec'
    }],
    uniqueUsers: [{
      value: 2000,
      date: 'Jan'
    }, {
      value: 1500,
      date: 'Feb'
    }, {
      value: 3000,
      date: 'Mar'
    }, {
      value: 5000,
      date: 'Apr'
    }, {
      value: 3500,
      date: 'May'
    }, {
      value: 7700,
      date: 'Jun'
    }, {
      value: 3200,
      date: 'Jul'
    }, {
      value: 2943,
      date: 'Aug'
    }, {
      value: 4000,
      date: 'Sep'
    }, {
      value: 5000,
      date: 'Oct'
    }, {
      value: 6000,
      date: 'Nov'
    }, {
      value: 12500,
      date: 'Dec'
    }],
    averageTime: [{
      value: 55,
      date: 'Jan'
    }, {
      value: 170,
      date: 'Feb'
    }, {
      value: 420,
      date: 'Mar'
    }, {
      value: 279,
      date: 'Apr'
    }, {
      value: 50,
      date: 'May'
    }, {
      value: 10,
      date: 'Jun'
    }, {
      value: 190,
      date: 'Jul'
    }, {
      value: 200,
      date: 'Aug'
    }, {
      value: 180,
      date: 'Sep'
    }, {
      value: 250,
      date: 'Oct'
    }, {
      value: 250,
      date: 'Nov'
    }, {
      value: 40,
      date: 'Dec'
    }],
    bounceRate: [{
      value: 15.7,
      date: 'Jan'
    }, {
      value: 20,
      date: 'Feb'
    }, {
      value: 23,
      date: 'Mar'
    }, {
      value: 14,
      date: 'Apr'
    }, {
      value: 29,
      date: 'May'
    }, {
      value: 15,
      date: 'Jun'
    }, {
      value: 27,
      date: 'Jul'
    }, {
      value: 5,
      date: 'Aug'
    }, {
      value: 29,
      date: 'Sep'
    }, {
      value: 30,
      date: 'Oct'
    }, {
      value: 25,
      date: 'Nov'
    }, {
      value: 10,
      date: 'Dec'
    }]
  }, {
    name: 'Glyphy.io',
    color: '#FF9900',
    pageView: [{
      value: 7000,
      date: 'Jan'
    }, {
      value: 5000,
      date: 'Feb'
    }, {
      value: 4000,
      date: 'Mar'
    }, {
      value: 5000,
      date: 'Apr'
    }, {
      value: 4500,
      date: 'May'
    }, {
      value: 4700,
      date: 'Jun'
    }, {
      value: 10000,
      date: 'Jul'
    }, {
      value: 12000,
      date: 'Aug'
    }, {
      value: 5000,
      date: 'Sep'
    }, {
      value: 6000,
      date: 'Oct'
    }, {
      value: 5000,
      date: 'Nov'
    }, {
      value: 13500,
      date: 'Dec'
    }],
    uniqueUsers: [{
      value: 6000,
      date: 'Jan'
    }, {
      value: 4500,
      date: 'Feb'
    }, {
      value: 3000,
      date: 'Mar'
    }, {
      value: 7000,
      date: 'Apr'
    }, {
      value: 9500,
      date: 'May'
    }, {
      value: 17700,
      date: 'Jun'
    }, {
      value: 7200,
      date: 'Jul'
    }, {
      value: 2943,
      date: 'Aug'
    }, {
      value: 8000,
      date: 'Sep'
    }, {
      value: 5000,
      date: 'Oct'
    }, {
      value: 9000,
      date: 'Nov'
    }, {
      value: 2500,
      date: 'Dec'
    }],
    averageTime: [{
      value: 355,
      date: 'Jan'
    }, {
      value: 70,
      date: 'Feb'
    }, {
      value: 220,
      date: 'Mar'
    }, {
      value: 179,
      date: 'Apr'
    }, {
      value: 150,
      date: 'May'
    }, {
      value: 310,
      date: 'Jun'
    }, {
      value: 90,
      date: 'Jul'
    }, {
      value: 100,
      date: 'Aug'
    }, {
      value: 280,
      date: 'Sep'
    }, {
      value: 150,
      date: 'Oct'
    }, {
      value: 450,
      date: 'Nov'
    }, {
      value: 140,
      date: 'Dec'
    }],
    bounceRate: [{
      value: 35.7,
      date: 'Jan'
    }, {
      value: 40,
      date: 'Feb'
    }, {
      value: 13,
      date: 'Mar'
    }, {
      value: 34,
      date: 'Apr'
    }, {
      value: 59,
      date: 'May'
    }, {
      value: 35,
      date: 'Jun'
    }, {
      value: 37,
      date: 'Jul'
    }, {
      value: 15,
      date: 'Aug'
    }, {
      value: 39,
      date: 'Sep'
    }, {
      value: 30,
      date: 'Oct'
    }, {
      value: 45,
      date: 'Nov'
    }, {
      value: 30,
      date: 'Dec'
    }]
  }, {
    name: 'Designvalley.club',
    color: '#571DFE',
    pageView: [{
      value: 770,
      date: 'Jan'
    }, {
      value: 300,
      date: 'Feb'
    }, {
      value: 1000,
      date: 'Mar'
    }, {
      value: 2000,
      date: 'Apr'
    }, {
      value: 4500,
      date: 'May'
    }, {
      value: 7000,
      date: 'Jun'
    }, {
      value: 5200,
      date: 'Jul'
    }, {
      value: 1943,
      date: 'Aug'
    }, {
      value: 11000,
      date: 'Sep'
    }, {
      value: 5000,
      date: 'Oct'
    }, {
      value: 7000,
      date: 'Nov'
    }, {
      value: 13500,
      date: 'Dec'
    }],
    uniqueUsers: [{
      value: 2000,
      date: 'Jan'
    }, {
      value: 3500,
      date: 'Feb'
    }, {
      value: 4000,
      date: 'Mar'
    }, {
      value: 8000,
      date: 'Apr'
    }, {
      value: 5500,
      date: 'May'
    }, {
      value: 7700,
      date: 'Jun'
    }, {
      value: 4200,
      date: 'Jul'
    }, {
      value: 4943,
      date: 'Aug'
    }, {
      value: 6000,
      date: 'Sep'
    }, {
      value: 7000,
      date: 'Oct'
    }, {
      value: 4000,
      date: 'Nov'
    }, {
      value: 5500,
      date: 'Dec'
    }],
    averageTime: [{
      value: 155,
      date: 'Jan'
    }, {
      value: 170,
      date: 'Feb'
    }, {
      value: 120,
      date: 'Mar'
    }, {
      value: 279,
      date: 'Apr'
    }, {
      value: 350,
      date: 'May'
    }, {
      value: 210,
      date: 'Jun'
    }, {
      value: 190,
      date: 'Jul'
    }, {
      value: 200,
      date: 'Aug'
    }, {
      value: 180,
      date: 'Sep'
    }, {
      value: 350,
      date: 'Oct'
    }, {
      value: 150,
      date: 'Nov'
    }, {
      value: 340,
      date: 'Dec'
    }],
    bounceRate: [{
      value: 25.7,
      date: 'Jan'
    }, {
      value: 30,
      date: 'Feb'
    }, {
      value: 23,
      date: 'Mar'
    }, {
      value: 24,
      date: 'Apr'
    }, {
      value: 49,
      date: 'May'
    }, {
      value: 35,
      date: 'Jun'
    }, {
      value: 17,
      date: 'Jul'
    }, {
      value: 25,
      date: 'Aug'
    }, {
      value: 59,
      date: 'Sep'
    }, {
      value: 30,
      date: 'Oct'
    }, {
      value: 25,
      date: 'Nov'
    }, {
      value: 10,
      date: 'Dec'
    }]
  }, {
    name: 'Neubel',
    color: '#0C172E',
    pageView: [{
      value: 1000,
      date: 'Jan'
    }, {
      value: 2000,
      date: 'Feb'
    }, {
      value: 3000,
      date: 'Mar'
    }, {
      value: 4000,
      date: 'Apr'
    }, {
      value: 5500,
      date: 'May'
    }, {
      value: 6700,
      date: 'Jun'
    }, {
      value: 7200,
      date: 'Jul'
    }, {
      value: 8294,
      date: 'Aug'
    }, {
      value: 9000,
      date: 'Sep'
    }, {
      value: 6000,
      date: 'Oct'
    }, {
      value: 5000,
      date: 'Nov'
    }, {
      value: 13500,
      date: 'Dec'
    }],
    uniqueUsers: [{
      value: 1000,
      date: 'Jan'
    }, {
      value: 4500,
      date: 'Feb'
    }, {
      value: 3000,
      date: 'Mar'
    }, {
      value: 3000,
      date: 'Apr'
    }, {
      value: 4500,
      date: 'May'
    }, {
      value: 5700,
      date: 'Jun'
    }, {
      value: 4200,
      date: 'Jul'
    }, {
      value: 7943,
      date: 'Aug'
    }, {
      value: 3000,
      date: 'Sep'
    }, {
      value: 8000,
      date: 'Oct'
    }, {
      value: 6000,
      date: 'Nov'
    }, {
      value: 12500,
      date: 'Dec'
    }],
    averageTime: [{
      value: 55,
      date: 'Jan'
    }, {
      value: 270,
      date: 'Feb'
    }, {
      value: 320,
      date: 'Mar'
    }, {
      value: 179,
      date: 'Apr'
    }, {
      value: 450,
      date: 'May'
    }, {
      value: 110,
      date: 'Jun'
    }, {
      value: 90,
      date: 'Jul'
    }, {
      value: 100,
      date: 'Aug'
    }, {
      value: 280,
      date: 'Sep'
    }, {
      value: 250,
      date: 'Oct'
    }, {
      value: 350,
      date: 'Nov'
    }, {
      value: 140,
      date: 'Dec'
    }],
    bounceRate: [{
      value: 5.7,
      date: 'Jan'
    }, {
      value: 10,
      date: 'Feb'
    }, {
      value: 23,
      date: 'Mar'
    }, {
      value: 14,
      date: 'Apr'
    }, {
      value: 39,
      date: 'May'
    }, {
      value: 25,
      date: 'Jun'
    }, {
      value: 37,
      date: 'Jul'
    }, {
      value: 15,
      date: 'Aug'
    }, {
      value: 29,
      date: 'Sep'
    }, {
      value: 20,
      date: 'Oct'
    }, {
      value: 45,
      date: 'Nov'
    }, {
      value: 30,
      date: 'Dec'
    }]
  }];
  const data = {
    mostVisitedSites,
    mostActiveSites,
    topEvents,
    trends,
    sites
  };
  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ "./pages/index.module.scss":
/*!*********************************!*\
  !*** ./pages/index.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"summaryCards": "index_summaryCards__29Kpv",
	"data": "index_data__1fyau",
	"dataList": "index_dataList__tBh1V",
	"dataChart": "index_dataChart__3QrHP",
	"dataSeeAll": "index_dataSeeAll__1Xg26",
	"filters": "index_filters__3l9ye",
	"filterSelect": "index_filterSelect__1OxAd",
	"siteOptionColor": "index_siteOptionColor__AzQRm",
	"siteOption": "index_siteOption__32lPS"
};


/***/ }),

/***/ "./utils/format.js":
/*!*************************!*\
  !*** ./utils/format.js ***!
  \*************************/
/*! exports provided: formatNumber, formatNumberShort, formatFullName, formatMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumberShort", function() { return formatNumberShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatFullName", function() { return formatFullName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMinutes", function() { return formatMinutes; });
const formatNumber = value => new Intl.NumberFormat().format(value);
const formatNumberShort = (num, digits = 0) => {
  const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];

  for (let i = units.length - 1; i >= 0; i--) {
    let decimal = Math.pow(1000, i + 1);

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }

  return num;
};
const formatFullName = (firstName, lastName) => {
  let fullName = '';

  if (firstName && lastName) {
    fullName = firstName + ' ' + lastName;
  } else if (firstName || lastName) {
    fullName = firstName || lastName;
  }

  return fullName;
};
const formatMinutes = value => {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  const secondsStr = seconds < 10 ? `${seconds}0` : seconds;
  return `${minutes}:${secondsStr}`;
};

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: getTextWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextWidth", function() { return getTextWidth; });
const getTextWidth = (text, font) => {
  if (typeof document === 'undefined') {
    return 'auto';
  } // re-use canvas object for better performance


  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-outside-click-handler":
/*!**********************************************!*\
  !*** external "react-outside-click-handler" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-outside-click-handler");

/***/ }),

/***/ "react-popper":
/*!*******************************!*\
  !*** external "react-popper" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),

/***/ "react-portal":
/*!*******************************!*\
  !*** external "react-portal" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-portal");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdmF0YXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXZhdGFyL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbGVuZGFyU2VsZWN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbGVuZGFyU2VsZWN0L3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0L3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0TGVnZW5kL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoYXJ0TGVnZW5kL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGFJdGVtL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGFJdGVtL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGFMaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGFMaXN0L3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVscFRvb2x0aXAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVscFRvb2x0aXAvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFpbk1lbnUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFpbk1lbnUvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3Q2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdDYXJkL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNJY29uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNJY29uL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VDb250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VIZWFkZXIvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoSWNvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hJY29uL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlbGVjdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWxlY3Qvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3VtbWFyeUNhcmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3VtbWFyeUNhcmQvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFicy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJzL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RocmVlRG90c01lbnUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGhyZWVEb3RzTWVudS9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub3BCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9wQmFyL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvcE5hdmlnYXRpb24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVHJlbmRzTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmVuZHNMaXN0L3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJNZW51L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJNZW51L3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlUmVzcG9uc2l2ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb3V0c2lkZS1jbGljay1oYW5kbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcG9wcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcG9ydGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlY2hhcnRzXCIiXSwibmFtZXMiOlsiQXZhdGFyIiwiYWJiciIsImNvbG9yIiwiZGFyayIsImNsYXNzTmFtZSIsInBob3RvVXJsIiwiY24iLCJzdHlsZXMiLCJhdmF0YXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJDYWxlbmRhclNlbGVjdCIsImxhYmVsIiwidmFsdWUiLCJjYWxlbmRhclNlbGVjdCIsImljb24iLCJEb3QiLCJwcm9wcyIsImN4IiwiY3kiLCJwYXlsb2FkIiwiY2hhcnRSZWYiLCJmaWxsIiwiZm9ybWF0VmFsdWUiLCJjdXJyZW50IiwidG9vbHRpcCIsImxlZnQiLCJ0b3AiLCJ0b29sdGlwTGFiZWwiLCJkYXRlIiwidG9vbHRpcFZhbHVlIiwidG9vbHRpcEFycm93IiwiVG9vbHRpcENvbnRlbnQiLCJVTklUX0ZPUk1BVFRFUiIsIkNIQVJUX1VOSVQiLCJOVU1CRVIiLCJmb3JtYXROdW1iZXJTaG9ydCIsIlRJTUUiLCJmb3JtYXRNaW51dGVzIiwiUEVSQ0VOVEFHRSIsIlZBTFVFX0ZPUk1BVFRFUiIsImZvcm1hdE51bWJlciIsIkNoYXJ0IiwiZGF0YSIsInVuaXQiLCJjb25zb2xlIiwibG9nIiwidXNlUmVmIiwiaXNNb2JpbGUiLCJ1c2VSZXNwb25zaXZlIiwieUF4aXNGb3JtYXR0ZXIiLCJjaGFydCIsInRvVXBwZXJDYXNlIiwicmlnaHQiLCJkYXRhTWF4IiwiYm90dG9tIiwiciIsInN0cm9rZSIsIkNoYXJ0TGVnZW5kIiwiaXRlbXMiLCJzZWxlY3RlZCIsImNoYXJ0TGVnZW5kIiwibWFwIiwiaXRlbSIsImNpcmNsZSIsImJvcmRlckNvbG9yIiwiRGF0YUl0ZW0iLCJuYW1lIiwiZGVsdGEiLCJkZXNjcmlwdGlvbiIsImRhdGFJdGVtIiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIkRhdGFMaXN0IiwiRm9vdGVyIiwiZm9vdGVyIiwiSGVscFRvb2x0aXAiLCJ0aXRsZSIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwicmVmZXJlbmNlRWxlbWVudCIsInNldFJlZmVyZW5jZUVsZW1lbnQiLCJwb3BwZXJFbGVtZW50Iiwic2V0UG9wcGVyRWxlbWVudCIsImFycm93RWxlbWVudCIsInNldEFycm93RWxlbWVudCIsInBvcHBlclN0eWxlcyIsImF0dHJpYnV0ZXMiLCJ1c2VQb3BwZXIiLCJwbGFjZW1lbnQiLCJtb2RpZmllcnMiLCJvcHRpb25zIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwib2Zmc2V0IiwiZWxlbWVudCIsInBhZGRpbmciLCJjbG9zZSIsInVzZUNhbGxiYWNrIiwib3BlbiIsImhhbmRsZSIsInBvcG92ZXIiLCJwb3BwZXIiLCJjb250ZW50IiwiY29udGVudFRpdGxlIiwiY29udGVudERlc2NyaXB0aW9uIiwiYXJyb3ciLCJwb3BvdmVyQXJyb3ciLCJtZW51SXRlbXMiLCJhY3RpdmUiLCJNYWluTWVudSIsIm1haW5NZW51IiwiYmFja2dyb3VuZEltYWdlIiwiTmV3Q2FyZCIsIm5ld0NhcmQiLCJOb3RpZmljYXRpb25zSWNvbiIsImNvdW50Iiwibm90aWZpY2F0aW9uc0ljb24iLCJQYWdlQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJwYWdlQ29udGFpbmVyIiwiUGFnZUhlYWRlciIsImFzaWRlIiwicGFnZUhlYWRlciIsIlNlYXJjaEljb24iLCJzZWFyY2hJY29uIiwic2FtZVdpZHRoIiwiZW5hYmxlZCIsInBoYXNlIiwicmVxdWlyZXMiLCJmbiIsInN0YXRlIiwid2lkdGgiLCJyZWN0cyIsInJlZmVyZW5jZSIsImVmZmVjdCIsImVsZW1lbnRzIiwic3R5bGUiLCJvZmZzZXRXaWR0aCIsIkRyb3Bkb3duTWVudSIsIm9uQ2hhbmdlIiwidGhlbWUiLCJmdWxsIiwib3B0aW9uQ29tcG9uZW50IiwiT3B0aW9uQ29tcG9uZW50IiwiaGFuZGxlQ2xhc3NOYW1lIiwidmFsdWVXaWR0aCIsInNldFZhbHVlV2lkdGgiLCJ0b2dnbGUiLCJjaGFuZ2VWYWx1ZSIsIm9wdGlvbiIsIndpdGhDb2xvciIsInVzZU1lbW8iLCJfIiwic29tZSIsInZhbHVlTGFiZWwiLCJnZXQiLCJmaW5kIiwidXNlRWZmZWN0Iiwib3B0aW9uV2lkdGhzIiwiZ2V0VGV4dFdpZHRoIiwibWF4Iiwic2VsZWN0IiwidmFsdWVXcmFwcGVyIiwibGlzdCIsIlN1bW1hcnlDYXJkIiwiZmlsdGVyIiwiZmlsdGVyVmFsdWUiLCJzZXRGaWx0ZXJWYWx1ZSIsInN1bW1hcnlDYXJkIiwidGhyZWVEb3RzTWVudSIsImFjdGlvbiIsImZpbHRlclNlbGVjdEhhbmRsZSIsIlRhYnMiLCJvblRhYkNsaWNrIiwidGFic1dyYXBwZXIiLCJ0YWJzIiwiUmVhY3QiLCJDaGlsZHJlbiIsImNoaWxkIiwidGFiIiwiVGFiIiwiVGhyZWVEb3RzTWVudSIsImNsb3NlT25BY3Rpb24iLCJoYW5kbGVDbG9zZSIsIlRvcEJhciIsInRvcEJhciIsIm1vYmlsZU1lbnVXcmFwcGVyIiwibW9iaWxlTWVudUljb24iLCJsb2dvIiwicmlnaHRQYW5lbCIsInNlYXJjaCIsIm5vdGlmaWNhdGlvbnMiLCJ1c2VyTWVudSIsIlRvcE5hdmlnYXRpb24iLCJUcmVuZHNMaXN0IiwiaW5kZXgiLCJ0eXBlIiwiVXNlck1lbnUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImZ1bGxOYW1lIiwiZm9ybWF0RnVsbE5hbWUiLCJNT1NUX0FDVElWRV9TSVRFU19GSUxURVJfT1BUSU9OUyIsIk1PU1RfVklTSVRFRF9TSVRFU19GSUxURVJfT1BUSU9OUyIsIlRPUF9FVkVOVFNfRklMVEVSX09QVElPTlMiLCJNRURJQV9RVUVSWSIsIk1PQklMRSIsInF1ZXJ5IiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsInVzZU1lZGlhUXVlcnkiLCJ1c2VMYXlvdXRFZmZlY3QiLCJUQUJTIiwiUEFHRV9WSUVXIiwiVU5JUVVFX1VTRVJTIiwiQVZFUkFHRV9USU1FIiwiQk9VTkNFX1JBVEUiLCJUQUJfQ0hBUlRfVU5JVFMiLCJTaXRlT3B0aW9uIiwic2l0ZU9wdGlvbiIsInNpdGVPcHRpb25Db2xvciIsIkhvbWUiLCJzaXRlRmlsdGVyIiwic2V0U2l0ZUZpbHRlciIsImV2ZW50RmlsdGVyIiwic2V0RXZlbnRGaWx0ZXIiLCJzZXRUYWIiLCJjaGFuZ2VUYWIiLCJuZXdUYWIiLCJzZWxlY3RTaXRlRmlsdGVyIiwibmV3U2l0ZUZpbHRlciIsInNlbGVjdEV2ZW50RmlsdGVyIiwibmV3RXZlbnRGaWx0ZXIiLCJzaXRlRGF0YSIsInNpdGVzIiwic2l0ZXNGaWx0ZXJPcHRpb25zIiwic2l0ZSIsImRhdGFDb250ZW50IiwiZGF0YUxpc3QiLCJ0cmVuZHMiLCJkYXRhU2VlQWxsIiwiZGF0YUNoYXJ0IiwiZmlsdGVycyIsImZpbHRlclNlbGVjdCIsInN1bW1hcnlDYXJkcyIsIm1vc3RBY3RpdmVTaXRlcyIsIm1vc3RWaXNpdGVkU2l0ZXMiLCJ0b3BFdmVudHMiLCJnZXRTdGF0aWNQcm9wcyIsInBhZ2VWaWV3IiwidW5pcXVlVXNlcnMiLCJhdmVyYWdlVGltZSIsImJvdW5jZVJhdGUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwibnVtIiwiZGlnaXRzIiwidW5pdHMiLCJpIiwibGVuZ3RoIiwiZGVjaW1hbCIsIk1hdGgiLCJwb3ciLCJ0b0ZpeGVkIiwibWludXRlcyIsImZsb29yIiwic2Vjb25kcyIsInNlY29uZHNTdHIiLCJ0ZXh0IiwiZm9udCIsImRvY3VtZW50IiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibWV0cmljcyIsIm1lYXN1cmVUZXh0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuY29uc3QgQXZhdGFyID0gKHsgYWJiciwgY29sb3IsIGRhcmssIGNsYXNzTmFtZSwgcGhvdG9VcmwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGVzLmF2YXRhciwgeyBbc3R5bGVzLmRhcmtdOiBkYXJrIH0sIGNsYXNzTmFtZSl9XHJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfX1cclxuICAgID5cclxuICAgICAge3Bob3RvVXJsID8gPGltZyBzcmM9e3Bob3RvVXJsfSAvPiA6IDxzcGFuPnthYmJyfTwvc3Bhbj59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhclxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdmF0YXJcIjogXCJzdHlsZXNfYXZhdGFyX18zT1J0d1wiLFxuXHRcImRhcmtcIjogXCJzdHlsZXNfZGFya19fMVNWdi1cIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuY29uc3QgQ2FsZW5kYXJTZWxlY3QgPSAoeyBsYWJlbCwgdmFsdWUsIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMuY2FsZW5kYXJTZWxlY3QsIGNsYXNzTmFtZSl9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufS8+IHtsYWJlbH08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWV9Pnt2YWx1ZX08L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJTZWxlY3RcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FsZW5kYXJTZWxlY3RcIjogXCJzdHlsZXNfY2FsZW5kYXJTZWxlY3RfXzJFMEEwXCIsXG5cdFwiaWNvblwiOiBcInN0eWxlc19pY29uX18xOUd5clwiLFxuXHRcImxhYmVsXCI6IFwic3R5bGVzX2xhYmVsX18yc2UzU1wiLFxuXHRcInZhbHVlXCI6IFwic3R5bGVzX3ZhbHVlX18zLTdUTlwiXG59O1xuIiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgWEF4aXMsXHJcbiAgWUF4aXMsXHJcbiAgVG9vbHRpcCxcclxuICBMaW5lLFxyXG4gIExpbmVDaGFydCxcclxuICBSZXNwb25zaXZlQ29udGFpbmVyLFxyXG59IGZyb20gJ3JlY2hhcnRzJ1xyXG5pbXBvcnQge1xyXG4gIGZvcm1hdE51bWJlclNob3J0LFxyXG4gIGZvcm1hdE1pbnV0ZXMsXHJcbiAgZm9ybWF0TnVtYmVyLFxyXG59IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgQ0hBUlRfVU5JVCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHVzZVJlc3BvbnNpdmUgZnJvbSAnLi4vLi4vaG9va3MvdXNlUmVzcG9uc2l2ZSdcclxuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAncmVhY3QtcG9ydGFsJ1xyXG5cclxuY29uc3QgRG90ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjeCwgY3ksIHBheWxvYWQsIHZhbHVlLCBjaGFydFJlZiwgZmlsbCwgZm9ybWF0VmFsdWUgfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxjaXJjbGVcclxuICAgICAgICByPVwiNS41XCJcclxuICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCI1XCJcclxuICAgICAgICBmaWxsPXtmaWxsfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJlY2hhcnRzLWRvdCByZWNoYXJ0cy1saW5lLWRvdFwiXHJcbiAgICAgICAgY3g9e2N4fVxyXG4gICAgICAgIGN5PXtjeX1cclxuICAgICAgICByPXsxMH1cclxuICAgICAgICBvcGFjaXR5PXsxfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPFBvcnRhbCBub2RlPXtjaGFydFJlZi5jdXJyZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvb2x0aXB9IHN0eWxlPXt7IGxlZnQ6IGN4LCB0b3A6IGN5IC0gMTggfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvb2x0aXBMYWJlbH0+e3BheWxvYWQuZGF0ZX1gMjA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9vbHRpcFZhbHVlfT57Zm9ybWF0VmFsdWUodmFsdWUpfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b29sdGlwQXJyb3d9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUG9ydGFsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBUb29sdGlwQ29udGVudCA9ICgpID0+IDxkaXYgLz5cclxuXHJcbmNvbnN0IFVOSVRfRk9STUFUVEVSID0ge1xyXG4gIFtDSEFSVF9VTklULk5VTUJFUl06IGZvcm1hdE51bWJlclNob3J0LFxyXG4gIFtDSEFSVF9VTklULlRJTUVdOiBmb3JtYXRNaW51dGVzLFxyXG4gIFtDSEFSVF9VTklULlBFUkNFTlRBR0VdOiAodmFsdWUpID0+IHZhbHVlICsgJyUnLFxyXG59XHJcblxyXG5jb25zdCBWQUxVRV9GT1JNQVRURVIgPSB7XHJcbiAgW0NIQVJUX1VOSVQuTlVNQkVSXTogZm9ybWF0TnVtYmVyLFxyXG4gIFtDSEFSVF9VTklULlRJTUVdOiBmb3JtYXRNaW51dGVzLFxyXG4gIFtDSEFSVF9VTklULlBFUkNFTlRBR0VdOiAodmFsdWUpID0+IHZhbHVlICsgJyUnLFxyXG59XHJcblxyXG5jb25zdCBDaGFydCA9ICh7IGRhdGEsIGNvbG9yLCB1bml0ID0gQ0hBUlRfVU5JVC5OVU1CRVIgfSkgPT4ge1xyXG5jb25zb2xlLmxvZyhkYXRhKVxyXG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmKClcclxuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VSZXNwb25zaXZlKClcclxuICBjb25zdCB5QXhpc0Zvcm1hdHRlciA9IFVOSVRfRk9STUFUVEVSW3VuaXRdXHJcbiAgY29uc3QgZm9ybWF0VmFsdWUgPSBWQUxVRV9GT1JNQVRURVJbdW5pdF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnR9IHJlZj17Y2hhcnRSZWZ9PlxyXG4gICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgPExpbmVDaGFydCBkYXRhPXtkYXRhfT5cclxuICAgICAgICAgIDxYQXhpc1xyXG4gICAgICAgICAgICBkYXRhS2V5PVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgIGRvbWFpbj17WydkYXRhTWluJywgJ2RhdGFNYXgnXX1cclxuICAgICAgICAgICAgYXhpc0xpbmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICB0aWNrTGluZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIHRpY2tGb3JtYXR0ZXI9eyh2YWx1ZSkgPT4gdmFsdWUudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgcGFkZGluZz17eyBsZWZ0OiAzMywgcmlnaHQ6IDMzIH19XHJcbiAgICAgICAgICAgIGludGVydmFsPVwicHJlc2VydmVTdGFydFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgeyFpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgICAgIDxZQXhpc1xyXG4gICAgICAgICAgICAgIGRhdGFLZXk9XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgZG9tYWluPXtbJ2RhdGFNaW4nLCAoZGF0YU1heCkgPT4gZGF0YU1heCAqIDEuMV19XHJcbiAgICAgICAgICAgICAgaW50ZXJ2YWw9ezB9XHJcbiAgICAgICAgICAgICAgYXhpc0xpbmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHRpY2tMaW5lPXtmYWxzZX1cclxuICAgICAgICAgICAgICBzY2FsZT1cImxpbmVhclwiXHJcbiAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcj17eUF4aXNGb3JtYXR0ZXJ9XHJcbiAgICAgICAgICAgICAgcGFkZGluZz17eyBib3R0b206IDIzLCB0b3A6IDEzIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPFRvb2x0aXAgY29udGVudD17VG9vbHRpcENvbnRlbnR9IC8+XHJcbiAgICAgICAgICA8TGluZVxyXG4gICAgICAgICAgICBkYXRhS2V5PVwidmFsdWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwibGluZWFyXCJcclxuICAgICAgICAgICAgc3Ryb2tlPXtjb2xvcn1cclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezN9XHJcbiAgICAgICAgICAgIGRvdD17eyByOiAwLCBzdHJva2U6IDAgfX1cclxuICAgICAgICAgICAgYWN0aXZlRG90PXtcclxuICAgICAgICAgICAgICA8RG90IGNoYXJ0UmVmPXtjaGFydFJlZn0gZmlsbD17Y29sb3J9IGZvcm1hdFZhbHVlPXtmb3JtYXRWYWx1ZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xpbmVDaGFydD5cclxuICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGFydFwiOiBcInN0eWxlc19jaGFydF9fM01udFhcIixcblx0XCJ0b29sdGlwXCI6IFwic3R5bGVzX3Rvb2x0aXBfXzJHTDVZXCIsXG5cdFwidG9vbHRpcExhYmVsXCI6IFwic3R5bGVzX3Rvb2x0aXBMYWJlbF9fMmF5LXpcIixcblx0XCJ0b29sdGlwVmFsdWVcIjogXCJzdHlsZXNfdG9vbHRpcFZhbHVlX19OQnN5elwiLFxuXHRcInRvb2x0aXBBcnJvd1wiOiBcInN0eWxlc190b29sdGlwQXJyb3dfXzNCdHZoXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmNvbnN0IENoYXJ0TGVnZW5kID0gKHsgaXRlbXMsIHNlbGVjdGVkIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydExlZ2VuZH0+XHJcbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy5pdGVtLCB7IFtzdHlsZXMuc2VsZWN0ZWRdOiBpdGVtLmxhYmVsID09PSBzZWxlY3RlZCB9KX1cclxuICAgICAgICAgIHN0eWxlPXtpdGVtLmxhYmVsID09PSBzZWxlY3RlZCA/IHsgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yIH0gOiB7fX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZX0gc3R5bGU9e3sgYm9yZGVyQ29sb3I6IGl0ZW0uY29sb3IgfX0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PntpdGVtLmxhYmVsfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRMZWdlbmRcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2hhcnRMZWdlbmRcIjogXCJzdHlsZXNfY2hhcnRMZWdlbmRfXzJLYXRmXCIsXG5cdFwibGFiZWxcIjogXCJzdHlsZXNfbGFiZWxfXzFBUW5IXCIsXG5cdFwic2VsZWN0ZWRcIjogXCJzdHlsZXNfc2VsZWN0ZWRfXzNfclpVXCIsXG5cdFwiaXRlbVwiOiBcInN0eWxlc19pdGVtX18yTUJwWFwiLFxuXHRcImNpcmNsZVwiOiBcInN0eWxlc19jaXJjbGVfXzNEdGMxXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IEhlbHBUb29sdGlwIGZyb20gJy4uL0hlbHBUb29sdGlwJ1xyXG5cclxuY29uc3QgRGF0YUl0ZW0gPSAoeyBuYW1lLCB2YWx1ZSwgaWNvbiwgZGVsdGEsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhSXRlbX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XHJcbiAgICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxIZWxwVG9vbHRpcCB0aXRsZT17bmFtZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLmljb24sIHN0eWxlc1tpY29uXSl9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZX0+e3ZhbHVlfTwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgIHN0eWxlcy5kZWx0YSxcclxuICAgICAgICAgICAgZGVsdGEgPj0gMCA/IHN0eWxlcy5wb3NpdGl2ZSA6IHN0eWxlcy5uZWdhdGl2ZVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZGVsdGEgPiAwID8gJysnIDogJyd9XHJcbiAgICAgICAgICB7ZGVsdGF9JVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUl0ZW1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmFtZVwiOiBcInN0eWxlc19uYW1lX18zN2NrMlwiLFxuXHRcImRhdGFcIjogXCJzdHlsZXNfZGF0YV9fMUU2RTlcIixcblx0XCJpY29uXCI6IFwic3R5bGVzX2ljb25fX2I0Ti15XCIsXG5cdFwidHJlbmRVcFwiOiBcInN0eWxlc190cmVuZFVwX18zay1QblwiLFxuXHRcImNsb2NrXCI6IFwic3R5bGVzX2Nsb2NrX18zaU5iLVwiLFxuXHRcImJyYW5jaGVzXCI6IFwic3R5bGVzX2JyYW5jaGVzX18yclVPcFwiLFxuXHRcInZhbHVlXCI6IFwic3R5bGVzX3ZhbHVlX19vendQVVwiLFxuXHRcImRlbHRhXCI6IFwic3R5bGVzX2RlbHRhX18xNll2MVwiLFxuXHRcInBvc2l0aXZlXCI6IFwic3R5bGVzX3Bvc2l0aXZlX18yRnlZVVwiLFxuXHRcIm5lZ2F0aXZlXCI6IFwic3R5bGVzX25lZ2F0aXZlX18xemFvaVwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0J1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL0F2YXRhcidcclxuXHJcbmNvbnN0IERhdGFMaXN0ID0gKHsgaXRlbXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgPEF2YXRhciBhYmJyPXtpdGVtLmFiYnJ9IGNvbG9yPXtpdGVtLmNvbG9yfSBkYXJrPXtpdGVtLmRhcmt9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZX0+e2Zvcm1hdE51bWJlcihpdGVtLnZhbHVlKX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFMaXN0XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJzdHlsZXNfaXRlbV9fMm9BalhcIixcblx0XCJsYWJlbFwiOiBcInN0eWxlc19sYWJlbF9fMzRKSllcIixcblx0XCJuYW1lXCI6IFwic3R5bGVzX25hbWVfXzFvaHhCXCIsXG5cdFwidmFsdWVcIjogXCJzdHlsZXNfdmFsdWVfX0NiNUZDXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+wqkgQWxsIHJpZ2h0IHJlc2VydmVkLiBCZXR0ZXJNZXRlcjwvZm9vdGVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwic3R5bGVzX2Zvb3Rlcl9fM0RPZXFcIlxufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VQb3BwZXIgfSBmcm9tICdyZWFjdC1wb3BwZXInXHJcblxyXG5jb25zdCBIZWxwVG9vbHRpcCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtyZWZlcmVuY2VFbGVtZW50LCBzZXRSZWZlcmVuY2VFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3BvcHBlckVsZW1lbnQsIHNldFBvcHBlckVsZW1lbnRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbYXJyb3dFbGVtZW50LCBzZXRBcnJvd0VsZW1lbnRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCB7IHN0eWxlczogcG9wcGVyU3R5bGVzLCBhdHRyaWJ1dGVzIH0gPSB1c2VQb3BwZXIoXHJcbiAgICByZWZlcmVuY2VFbGVtZW50LFxyXG4gICAgcG9wcGVyRWxlbWVudCxcclxuICAgIHtcclxuICAgICAgcGxhY2VtZW50OiAndG9wJyxcclxuICAgICAgbW9kaWZpZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxyXG4gICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJ10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXHJcbiAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIG9mZnNldDogWzAsIDEwXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxyXG4gICAgICAgICAgLy8gcGFkZGluZyBzaG91bGQgYmUgZXF1YWwgdG8gYm9yZGVyLXJhZGl1cyBvZiB0aGUgZHJvcGRvd25cclxuICAgICAgICAgIG9wdGlvbnM6IHsgZWxlbWVudDogYXJyb3dFbGVtZW50LCBwYWRkaW5nOiA3IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcclxuICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgLy8gcGFkZGluZyBmcm9tIGJyb3dzZXIgZWRnZXNcclxuICAgICAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICBjb25zdCBjbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzT3BlbihmYWxzZSlcclxuICB9LCBbc2V0SXNPcGVuXSlcclxuXHJcbiAgY29uc3Qgb3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzT3Blbih0cnVlKVxyXG4gIH0sIFtzZXRJc09wZW5dKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17b3Blbn1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9e2Nsb3NlfVxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhhbmRsZX1cclxuICAgICAgICByZWY9e3NldFJlZmVyZW5jZUVsZW1lbnR9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3BvdmVyfVxyXG4gICAgICAgICAgcmVmPXtzZXRQb3BwZXJFbGVtZW50fVxyXG4gICAgICAgICAgc3R5bGU9e3BvcHBlclN0eWxlcy5wb3BwZXJ9XHJcbiAgICAgICAgICB7Li4uYXR0cmlidXRlcy5wb3BwZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50VGl0bGV9Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50RGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e3NldEFycm93RWxlbWVudH1cclxuICAgICAgICAgICAgc3R5bGU9e3BvcHBlclN0eWxlcy5hcnJvd31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9wb3ZlckFycm93fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVscFRvb2x0aXBcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGFuZGxlXCI6IFwic3R5bGVzX2hhbmRsZV9fS3ZtOENcIixcblx0XCJwb3BvdmVyXCI6IFwic3R5bGVzX3BvcG92ZXJfXzJaNTRXXCIsXG5cdFwicG9wb3ZlckFycm93XCI6IFwic3R5bGVzX3BvcG92ZXJBcnJvd19fMUhVazBcIixcblx0XCJjb250ZW50XCI6IFwic3R5bGVzX2NvbnRlbnRfXzIzQVM2XCIsXG5cdFwiY29udGVudFRpdGxlXCI6IFwic3R5bGVzX2NvbnRlbnRUaXRsZV9fMVlVZzVcIixcblx0XCJjb250ZW50RGVzY3JpcHRpb25cIjogXCJzdHlsZXNfY29udGVudERlc2NyaXB0aW9uX18yT184T1wiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5jb25zdCBtZW51SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdEYXNoYm9hcmQnLFxyXG4gICAgaWNvbjogJ2Rhc2hib2FyZCcsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1NpdGVzJyxcclxuICAgIGljb246ICdzaXRlcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0NhbXBhaWducycsXHJcbiAgICBpY29uOiAnY2FtcGFpZ25zJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQW5hbHl0aWNzJyxcclxuICAgIGljb246ICdhbmFseXRpY3MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdMaXZlIFZpZXcnLFxyXG4gICAgaWNvbjogJ2xpdmUtdmlldycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1VzZXJzJyxcclxuICAgIGljb246ICd1c2VycycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ09yZ2FuaXphdGlvbnMnLFxyXG4gICAgaWNvbjogJ29yZ2FuaXphdGlvbnMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdTZXR0aW5ncycsXHJcbiAgICBpY29uOiAnc2V0dGluZ3MnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IE1haW5NZW51ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5NZW51fT5cclxuICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aXRlbS5sYWJlbH0gY2xhc3NOYW1lPXtjbihzdHlsZXMuaXRlbSwgeyBbc3R5bGVzLmFjdGl2ZV06IGl0ZW0uYWN0aXZlIH0pfT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlcy9pY29uLW1lbnUtJHtpdGVtLmljb259LnN2ZylgLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpdGVtLmxhYmVsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbk1lbnVcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpbk1lbnVcIjogXCJzdHlsZXNfbWFpbk1lbnVfX01FVThQXCIsXG5cdFwiaXRlbVwiOiBcInN0eWxlc19pdGVtX19KUEpYLVwiLFxuXHRcImFjdGl2ZVwiOiBcInN0eWxlc19hY3RpdmVfXzJKWHdRXCIsXG5cdFwiaWNvblwiOiBcInN0eWxlc19pY29uX18zSkdoYVwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IE5ld0NhcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3Q2FyZH0gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Q2FyZFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuZXdDYXJkXCI6IFwic3R5bGVzX25ld0NhcmRfXzJCSGlaXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uc0ljb24gPSAoeyBjb3VudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm90aWZpY2F0aW9uc0ljb259PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnR9Pntjb3VudH08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uc0ljb25cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibm90aWZpY2F0aW9uc0ljb25cIjogXCJzdHlsZXNfbm90aWZpY2F0aW9uc0ljb25fXzFJanNpXCIsXG5cdFwiaWNvblwiOiBcInN0eWxlc19pY29uX192VXo5QVwiLFxuXHRcImNvdW50XCI6IFwic3R5bGVzX2NvdW50X19jUXNOd1wiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IFBhZ2VDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRhaW5lcn0+e2NoaWxkcmVufTwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29udGFpbmVyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhZ2VDb250YWluZXJcIjogXCJzdHlsZXNfcGFnZUNvbnRhaW5lcl9fMXlZMWVcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBQYWdlSGVhZGVyID0gKHsgdGl0bGUsIGFzaWRlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlSGVhZGVyfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9oMT5cclxuICAgICAge2FzaWRlfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhZ2VIZWFkZXJcIjogXCJzdHlsZXNfcGFnZUhlYWRlcl9fMWRNY0hcIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlc190aXRsZV9fM1dBYUJcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBTZWFyY2hJY29uID0gKCkgPT4ge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEljb259IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEljb25cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoSWNvblwiOiBcInN0eWxlc19zZWFyY2hJY29uX18ybDNnSlwiXG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgT3V0c2lkZUNsaWNrSGFuZGxlciBmcm9tICdyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXInXHJcbmltcG9ydCB7IHVzZVBvcHBlciB9IGZyb20gJ3JlYWN0LXBvcHBlcidcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IGdldFRleHRXaWR0aCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5cclxuY29uc3Qgc2FtZVdpZHRoID0ge1xyXG4gIG5hbWU6ICdzYW1lV2lkdGgnLFxyXG4gIGVuYWJsZWQ6IHRydWUsXHJcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXHJcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddLFxyXG4gIGZuOiAoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyLndpZHRoID0gYCR7c3RhdGUucmVjdHMucmVmZXJlbmNlLndpZHRoICsgMzV9cHhgXHJcbiAgfSxcclxuICBlZmZlY3Q6ICh7IHN0YXRlIH0pID0+IHtcclxuICAgIHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZS53aWR0aCA9IGAke3N0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZS5vZmZzZXRXaWR0aCArIDM1fXB4YFxyXG4gIH0sXHJcbn1cclxuXHJcbmNvbnN0IERyb3Bkb3duTWVudSA9ICh7XHJcbiAgb3B0aW9ucyxcclxuICB2YWx1ZSxcclxuICBsYWJlbCxcclxuICBvbkNoYW5nZSxcclxuICB0aGVtZSxcclxuICBjbGFzc05hbWUsXHJcbiAgZnVsbCxcclxuICBvcHRpb25Db21wb25lbnQ6IE9wdGlvbkNvbXBvbmVudCxcclxuICBoYW5kbGVDbGFzc05hbWUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbdmFsdWVXaWR0aCwgc2V0VmFsdWVXaWR0aF0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtyZWZlcmVuY2VFbGVtZW50LCBzZXRSZWZlcmVuY2VFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3BvcHBlckVsZW1lbnQsIHNldFBvcHBlckVsZW1lbnRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCB7IHN0eWxlczogcG9wcGVyU3R5bGVzLCBhdHRyaWJ1dGVzIH0gPSB1c2VQb3BwZXIoXHJcbiAgICByZWZlcmVuY2VFbGVtZW50LFxyXG4gICAgcG9wcGVyRWxlbWVudCxcclxuICAgIHtcclxuICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcclxuICAgICAgbW9kaWZpZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxyXG4gICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IFsnYm90dG9tLXN0YXJ0J10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXHJcbiAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIG9mZnNldDogWy0yMCwgLTQ2XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcclxuICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgLy8gcGFkZGluZyBmcm9tIGJyb3dzZXIgZWRnZXNcclxuICAgICAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2FtZVdpZHRoLFxyXG4gICAgICBdLFxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgY29uc3QgY2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgfSwgW3NldElzT3Blbl0pXHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKVxyXG4gIH0sIFtpc09wZW4sIHNldElzT3Blbl0pXHJcblxyXG4gIGNvbnN0IGNoYW5nZVZhbHVlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAob3B0aW9uKSA9PiAoKSA9PiB7XHJcbiAgICAgIGNsb3NlKClcclxuICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2Uob3B0aW9uLnZhbHVlKVxyXG4gICAgfSxcclxuICAgIFtjbG9zZV1cclxuICApXHJcblxyXG4gIGNvbnN0IHdpdGhDb2xvciA9IHVzZU1lbW8oKCkgPT4gXy5zb21lKG9wdGlvbnMsIChvcHRpb24pID0+IG9wdGlvbi5jb2xvcikpXHJcblxyXG4gIGNvbnN0IHZhbHVlTGFiZWwgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiBfLmdldChfLmZpbmQob3B0aW9ucywgeyB2YWx1ZSB9KSwgJ2xhYmVsJylcclxuICB9LCBbb3B0aW9ucywgdmFsdWVdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHdpZHRoID0gJ2F1dG8nXHJcblxyXG4gICAgaWYgKGZ1bGwpIHtcclxuICAgICAgY29uc3Qgb3B0aW9uV2lkdGhzID0gb3B0aW9ucy5tYXAoKG9wdGlvbikgPT5cclxuICAgICAgICBnZXRUZXh0V2lkdGgoXHJcbiAgICAgICAgICBvcHRpb24ubGFiZWwsXHJcbiAgICAgICAgICBcIjUwMCAxNnB4ICdETSBTYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlwiXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcblxyXG4gICAgICB3aWR0aCA9IF8ubWF4KG9wdGlvbldpZHRocylcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZVdpZHRoKHdpZHRoKVxyXG4gIH0sIFtzZXRWYWx1ZVdpZHRoLCBvcHRpb25zLCBmdWxsXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBzdHlsZXMuc2VsZWN0LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFtzdHlsZXNbdGhlbWVdXTogISF0aGVtZSxcclxuICAgICAgICAgIFtzdHlsZXMub3Blbl06IGlzT3BlbixcclxuICAgICAgICAgIFtzdHlsZXMuZnVsbF06IGZ1bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAgPE91dHNpZGVDbGlja0hhbmRsZXIgb25PdXRzaWRlQ2xpY2s9e2Nsb3NlfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGV9XHJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMuaGFuZGxlLCBoYW5kbGVDbGFzc05hbWUpfVxyXG4gICAgICAgICAgcmVmPXtzZXRSZWZlcmVuY2VFbGVtZW50fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PntsYWJlbH06PC9kaXY+XHJcbiAgICAgICAgICB7ISF2YWx1ZUxhYmVsICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWV9IHN0eWxlPXt7IHdpZHRoOiB2YWx1ZVdpZHRoIH19PlxyXG4gICAgICAgICAgICAgICAge3dpdGhDb2xvciA/ICcnIDogdmFsdWVMYWJlbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9wb3Zlcn1cclxuICAgICAgICAgICAgcmVmPXtzZXRQb3BwZXJFbGVtZW50fVxyXG4gICAgICAgICAgICBzdHlsZT17cG9wcGVyU3R5bGVzLnBvcHBlcn1cclxuICAgICAgICAgICAgey4uLmF0dHJpYnV0ZXMucG9wcGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxyXG4gICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGFuZ2VWYWx1ZShvcHRpb24pfVxyXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGVzLm9wdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuc2VsZWN0ZWRdOiBvcHRpb24udmFsdWUgPT09IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMud2l0aENvbG9yXTogd2l0aENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge09wdGlvbkNvbXBvbmVudCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uQ29tcG9uZW50IG9wdGlvbj17b3B0aW9ufSB2YWx1ZT17dmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L091dHNpZGVDbGlja0hhbmRsZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTWVudVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWxlY3RcIjogXCJzdHlsZXNfc2VsZWN0X18zQnlQWlwiLFxuXHRcImhhbmRsZVwiOiBcInN0eWxlc19oYW5kbGVfXzJDdFpzXCIsXG5cdFwidmFsdWVXcmFwcGVyXCI6IFwic3R5bGVzX3ZhbHVlV3JhcHBlcl9fYkJ1dXFcIixcblx0XCJ2YWx1ZVwiOiBcInN0eWxlc192YWx1ZV9fMThZVUdcIixcblx0XCJwb3BvdmVyXCI6IFwic3R5bGVzX3BvcG92ZXJfXzJxVTJSXCIsXG5cdFwiZnVsbFwiOiBcInN0eWxlc19mdWxsX18zdlAzUVwiLFxuXHRcImxpc3RcIjogXCJzdHlsZXNfbGlzdF9fMWM3V05cIixcblx0XCJvcHRpb25cIjogXCJzdHlsZXNfb3B0aW9uX18xVWdyb1wiLFxuXHRcInNlbGVjdGVkXCI6IFwic3R5bGVzX3NlbGVjdGVkX18zanVBb1wiLFxuXHRcImRhcmtcIjogXCJzdHlsZXNfZGFya19fblRUeUJcIixcblx0XCJvcGVuXCI6IFwic3R5bGVzX29wZW5fXzE0ck1qXCJcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgVGhyZWVEb3RzTWVudSBmcm9tICcuLi9UaHJlZURvdHNNZW51J1xyXG5pbXBvcnQgRGF0YUxpc3QgZnJvbSAnLi4vRGF0YUxpc3QnXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vU2VsZWN0J1xyXG5cclxuY29uc3QgU3VtbWFyeUNhcmQgPSAoeyB0aXRsZSwgZGF0YSwgZmlsdGVyIH0pID0+IHtcclxuICBjb25zdCBbZmlsdGVyVmFsdWUsIHNldEZpbHRlclZhbHVlXSA9IHVzZVN0YXRlKGZpbHRlci52YWx1ZSB8fCBmaWx0ZXIub3B0aW9uc1swXS52YWx1ZSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5Q2FyZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGhyZWVEb3RzTWVudX0+XHJcbiAgICAgICAgPFRocmVlRG90c01lbnVcclxuICAgICAgICAgIG9wdGlvbnM9e1tcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0VkaXQnLCBhY3Rpb246ICgpID0+IHt9IH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdSZWZyZXNoJywgYWN0aW9uOiAoKSA9PiB7fSB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9oMz5cclxuICAgICAgeyEhZmlsdGVyICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn0+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlci5vcHRpb25zfVxyXG4gICAgICAgICAgICBsYWJlbD17ZmlsdGVyLmxhYmVsfVxyXG4gICAgICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRGaWx0ZXJWYWx1ZX1cclxuICAgICAgICAgICAgaGFuZGxlQ2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyU2VsZWN0SGFuZGxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPERhdGFMaXN0IGl0ZW1zPXtkYXRhfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5Q2FyZFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdW1tYXJ5Q2FyZFwiOiBcInN0eWxlc19zdW1tYXJ5Q2FyZF9fLXZ1Rk9cIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlc190aXRsZV9fMlBLd1VcIixcblx0XCJ0aHJlZURvdHNNZW51XCI6IFwic3R5bGVzX3RocmVlRG90c01lbnVfXzE1ZE04XCIsXG5cdFwiZmlsdGVyXCI6IFwic3R5bGVzX2ZpbHRlcl9fa2s4VVdcIixcblx0XCJmaWx0ZXJTZWxlY3RIYW5kbGVcIjogXCJzdHlsZXNfZmlsdGVyU2VsZWN0SGFuZGxlX18xS3UyRVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmNvbnN0IFRhYnMgPSAoeyBjaGlsZHJlbiwgc2VsZWN0ZWQsIG9uVGFiQ2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYnNXcmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJzfT5cclxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpID0+XHJcbiAgICAgICAgICBjaGlsZCAmJiBjaGlsZC5wcm9wcy50YWIgPyAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy50YWIsIHtcclxuICAgICAgICAgICAgICAgIFtzdHlsZXMuc2VsZWN0ZWRdOiBjaGlsZC5wcm9wcy50YWIgPT09IHNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVGFiQ2xpY2soY2hpbGQucHJvcHMudGFiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBjaGlsZFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5UYWJzLlRhYiA9ICgpID0+IHt9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhYnNXcmFwcGVyXCI6IFwic3R5bGVzX3RhYnNXcmFwcGVyX18xOEpEV1wiLFxuXHRcInRhYnNcIjogXCJzdHlsZXNfdGFic19fMVhPcW1cIixcblx0XCJ0YWJcIjogXCJzdHlsZXNfdGFiX18yVGZ0bVwiLFxuXHRcInNlbGVjdGVkXCI6IFwic3R5bGVzX3NlbGVjdGVkX196WlFRV1wiXG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBPdXRzaWRlQ2xpY2tIYW5kbGVyIGZyb20gJ3JlYWN0LW91dHNpZGUtY2xpY2staGFuZGxlcidcclxuaW1wb3J0IHsgdXNlUG9wcGVyIH0gZnJvbSAncmVhY3QtcG9wcGVyJ1xyXG5cclxuY29uc3QgVGhyZWVEb3RzTWVudSA9ICh7IG9wdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcmVmZXJlbmNlRWxlbWVudCwgc2V0UmVmZXJlbmNlRWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtwb3BwZXJFbGVtZW50LCBzZXRQb3BwZXJFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgeyBzdHlsZXM6IHBvcHBlclN0eWxlcywgYXR0cmlidXRlcyB9ID0gdXNlUG9wcGVyKFxyXG4gICAgcmVmZXJlbmNlRWxlbWVudCxcclxuICAgIHBvcHBlckVsZW1lbnQsXHJcbiAgICB7XHJcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1lbmQnLFxyXG4gICAgICBtb2RpZmllcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXHJcbiAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogWydib3R0b20tZW5kJ10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXHJcbiAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIG9mZnNldDogWzAsIC00MF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXHJcbiAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmcgZnJvbSBicm93c2VyIGVkZ2VzXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgY29uc3QgY2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgfSwgW3NldElzT3Blbl0pXHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKVxyXG4gIH0sIFtpc09wZW4sIHNldElzT3Blbl0pXHJcblxyXG4gIGNvbnN0IGNsb3NlT25BY3Rpb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChhY3Rpb24pID0+ICgpID0+IHtcclxuICAgICAgY2xvc2UoKVxyXG4gICAgICBhY3Rpb24gJiYgYWN0aW9uKClcclxuICAgIH0sXHJcbiAgICBbY2xvc2VdXHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE91dHNpZGVDbGlja0hhbmRsZXIgb25PdXRzaWRlQ2xpY2s9e2Nsb3NlfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICB0YWJJbmRleD17MH1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oYW5kbGV9XHJcbiAgICAgICAgcmVmPXtzZXRSZWZlcmVuY2VFbGVtZW50fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9wb3Zlcn1cclxuICAgICAgICAgIHJlZj17c2V0UG9wcGVyRWxlbWVudH1cclxuICAgICAgICAgIHN0eWxlPXtwb3BwZXJTdHlsZXMucG9wcGVyfVxyXG4gICAgICAgICAgey4uLmF0dHJpYnV0ZXMucG9wcGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU9uQWN0aW9uKG9wdGlvbi5hY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbG9zZX1cclxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oYW5kbGVDbG9zZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L091dHNpZGVDbGlja0hhbmRsZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaHJlZURvdHNNZW51XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhhbmRsZVwiOiBcInN0eWxlc19oYW5kbGVfXzNwbU1oXCIsXG5cdFwiaGFuZGxlQ2xvc2VcIjogXCJzdHlsZXNfaGFuZGxlQ2xvc2VfXzNSRWVGXCIsXG5cdFwicG9wb3ZlclwiOiBcInN0eWxlc19wb3BvdmVyX18yUGhEalwiLFxuXHRcImxpc3RcIjogXCJzdHlsZXNfbGlzdF9fMnVtUlhcIixcblx0XCJvcHRpb25cIjogXCJzdHlsZXNfb3B0aW9uX18xeUxNQlwiXG59O1xuIiwiaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJy4uL05vdGlmaWNhdGlvbnNJY29uJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICcuLi9TZWFyY2hJY29uJ1xyXG5pbXBvcnQgVXNlck1lbnUgZnJvbSAnLi4vVXNlck1lbnUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBUb3BCYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wQmFyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVNZW51V3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVNZW51SWNvbn0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRQYW5lbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmaWNhdGlvbnN9PlxyXG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIGNvdW50PXs5fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlck1lbnV9PlxyXG4gICAgICAgICAgPFVzZXJNZW51XHJcbiAgICAgICAgICAgIHBob3RvVXJsPVwiL2Fzc2V0cy9hdmF0YXIucG5nXCJcclxuICAgICAgICAgICAgZmlyc3ROYW1lPVwiQWRyaWFuXCJcclxuICAgICAgICAgICAgbGFzdE5hbWU9XCJWaWxsYVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvcEJhclwiOiBcInN0eWxlc190b3BCYXJfX240cmtVXCIsXG5cdFwicmlnaHRQYW5lbFwiOiBcInN0eWxlc19yaWdodFBhbmVsX18xRUlnWFwiLFxuXHRcIm5vdGlmaWNhdGlvbnNcIjogXCJzdHlsZXNfbm90aWZpY2F0aW9uc19fMllwbW9cIixcblx0XCJzZWFyY2hcIjogXCJzdHlsZXNfc2VhcmNoX18xcGYtX1wiLFxuXHRcInVzZXJNZW51XCI6IFwic3R5bGVzX3VzZXJNZW51X19Nb3hFU1wiLFxuXHRcIm1vYmlsZU1lbnVXcmFwcGVyXCI6IFwic3R5bGVzX21vYmlsZU1lbnVXcmFwcGVyX18zeFZXQlwiLFxuXHRcIm1vYmlsZU1lbnVJY29uXCI6IFwic3R5bGVzX21vYmlsZU1lbnVJY29uX18xN3lsZVwiLFxuXHRcImxvZ29cIjogXCJzdHlsZXNfbG9nb19fM0RMS0dcIlxufTtcbiIsImltcG9ydCBUb3BCYXIgZnJvbSAnLi4vVG9wQmFyJ1xyXG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi4vTWFpbk1lbnUnXHJcblxyXG5jb25zdCBUb3BOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8VG9wQmFyIC8+XHJcbiAgICAgIDxNYWluTWVudSAvPlxyXG4gICAgPC9uYXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXZpZ2F0aW9uXHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCdcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9BdmF0YXInXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuY29uc3QgVHJlbmRzTGlzdCA9ICh7IGl0ZW1zIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhSXRlbX0+XHJcbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICA8QXZhdGFyIGFiYnI9e2l0ZW0uYWJicn0gY29sb3I9e2l0ZW0uY29sb3J9IGRhcms9e2l0ZW0uZGFya30gY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnR5cGUsIHN0eWxlc1tpdGVtLnR5cGVdKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZX0+e2Zvcm1hdE51bWJlcihpdGVtLnZhbHVlKX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZW5kc0xpc3RcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcInN0eWxlc19pdGVtX18zZ1FJOFwiLFxuXHRcImxhYmVsXCI6IFwic3R5bGVzX2xhYmVsX18ySXNHOFwiLFxuXHRcInR5cGVcIjogXCJzdHlsZXNfdHlwZV9fM1p5WldcIixcblx0XCJ1cFwiOiBcInN0eWxlc191cF9fM0tHRThcIixcblx0XCJnb29kXCI6IFwic3R5bGVzX2dvb2RfXzNXV0RhXCIsXG5cdFwiYmFkXCI6IFwic3R5bGVzX2JhZF9fMktkY0JcIixcblx0XCJob3RcIjogXCJzdHlsZXNfaG90X18zcmlJelwiLFxuXHRcInZhbHVlXCI6IFwic3R5bGVzX3ZhbHVlX19XaG10aVwiLFxuXHRcImF2YXRhclwiOiBcInN0eWxlc19hdmF0YXJfX2JYRUNoXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vQXZhdGFyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBmb3JtYXRGdWxsTmFtZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCdcclxuXHJcbmNvbnN0IFVzZXJNZW51ID0gKHsgcGhvdG9VcmwsIGZpcnN0TmFtZSwgbGFzdE5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJNZW51fT5cclxuICAgIDxBdmF0YXIgcGhvdG9Vcmw9e3Bob3RvVXJsfSBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9IC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxOYW1lfT57Zm9ybWF0RnVsbE5hbWUoZmlyc3ROYW1lLCBsYXN0TmFtZSl9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93fSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTWVudVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyTWVudVwiOiBcInN0eWxlc191c2VyTWVudV9fQ1ZGS1pcIixcblx0XCJhdmF0YXJcIjogXCJzdHlsZXNfYXZhdGFyX19ZNFA5UlwiLFxuXHRcImZ1bGxOYW1lXCI6IFwic3R5bGVzX2Z1bGxOYW1lX19ITi15N1wiLFxuXHRcImFycm93XCI6IFwic3R5bGVzX2Fycm93X193dDBGMFwiXG59O1xuIiwiZXhwb3J0IGNvbnN0IE1PU1RfQUNUSVZFX1NJVEVTX0ZJTFRFUl9PUFRJT05TID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnQWxsJyxcclxuICAgIHZhbHVlOiAnQWxsJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnR2x5cGh5JyxcclxuICAgIHZhbHVlOiAnR2x5cGh5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRGVzaWduU3RyaXBlJyxcclxuICAgIHZhbHVlOiAnRGVzaWduU3RyaXBlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRGVzaWduVmFsbGV5JyxcclxuICAgIHZhbHVlOiAnRGVzaWduVmFsbGV5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTmV1ZXViZWwnLFxyXG4gICAgdmFsdWU6ICdOZXVldWJlbCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0xhc3QgWWVhcicsXHJcbiAgICB2YWx1ZTogJ0xhc3QgWWVhcicsXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PU1RfVklTSVRFRF9TSVRFU19GSUxURVJfT1BUSU9OUyA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ1RvZGF5JyxcclxuICAgIHZhbHVlOiAnVG9kYXknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdZZXN0ZXJkYXknLFxyXG4gICAgdmFsdWU6ICdZZXN0ZXJkYXknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdMYXN0IFdlZWsnLFxyXG4gICAgdmFsdWU6ICdMYXN0IFdlZWsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICdMYXN0IE1vbnRoJyxcclxuICAgIHZhbHVlOiAnTGFzdCBNb250aCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0xhc3QgWWVhcicsXHJcbiAgICB2YWx1ZTogJ0xhc3QgWWVhcicsXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IFRPUF9FVkVOVFNfRklMVEVSX09QVElPTlMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdSZWNlbnRzJyxcclxuICAgIHZhbHVlOiAnUmVjZW50cycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ1llc3RlcmRheScsXHJcbiAgICB2YWx1ZTogJ1llc3RlcmRheScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0xhc3QgV2VlaycsXHJcbiAgICB2YWx1ZTogJ0xhc3QgV2VlaycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0xhc3QgTW9udGgnLFxyXG4gICAgdmFsdWU6ICdMYXN0IE1vbnRoJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTGFzdCBZZWFyJyxcclxuICAgIHZhbHVlOiAnTGFzdCBZZWFyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnQWxsJyxcclxuICAgIHZhbHVlOiAnQWxsJyxcclxuICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgTUVESUFfUVVFUlkgPSB7XHJcbiAgTU9CSUxFOiB7XHJcbiAgICBxdWVyeTogJyhtYXgtd2lkdGg6IDEwMjNweCknLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFSVF9VTklUID0ge1xyXG4gIE5VTUJFUjogJ251bWJlcicsXHJcbiAgVElNRTogJ3RpbWUnLFxyXG4gIFBFUkNFTlRBR0U6ICdwZXJjZW50YWdlJ1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnXHJcbmltcG9ydCB7IE1FRElBX1FVRVJZIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgdXNlUmVzcG9uc2l2ZSA9ICgpID0+IHtcclxuICBjb25zdCBbaXNDbGllbnQsIHNldElzQ2xpZW50XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkoTUVESUFfUVVFUlkuTU9CSUxFKVxyXG5cclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSBzZXRJc0NsaWVudCh0cnVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNNb2JpbGU6IGlzQ2xpZW50ID8gaXNNb2JpbGUgOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNpdmVcclxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgVG9wTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1RvcE5hdmlnYXRpb24nXHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUhlYWRlcidcclxuaW1wb3J0IFBhZ2VDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29udGFpbmVyJ1xyXG5pbXBvcnQgU3VtbWFyeUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TdW1tYXJ5Q2FyZCdcclxuaW1wb3J0IFRyZW5kc0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9UcmVuZHNMaXN0J1xyXG5pbXBvcnQgTmV3Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL05ld0NhcmQnXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vY29tcG9uZW50cy9TZWxlY3QnXHJcbmltcG9ydCBDYWxlbmRhclNlbGVjdCBmcm9tICcuLi9jb21wb25lbnRzL0NhbGVuZGFyU2VsZWN0J1xyXG5pbXBvcnQgVGFicyBmcm9tICcuLi9jb21wb25lbnRzL1RhYnMnXHJcbmltcG9ydCB7XHJcbiAgTU9TVF9BQ1RJVkVfU0lURVNfRklMVEVSX09QVElPTlMsXHJcbiAgTU9TVF9WSVNJVEVEX1NJVEVTX0ZJTFRFUl9PUFRJT05TLFxyXG4gIFRPUF9FVkVOVFNfRklMVEVSX09QVElPTlMsXHJcbiAgTUVESUFfUVVFUlksXHJcbiAgQ0hBUlRfVU5JVCxcclxufSBmcm9tICcuLi9jb25zdGFudHMnXHJcbmltcG9ydCBEYXRhSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFJdGVtJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFydCdcclxuaW1wb3J0IENoYXJ0TGVnZW5kIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcnRMZWdlbmQnXHJcbmltcG9ydCB1c2VSZXNwb25zaXZlIGZyb20gJy4uL2hvb2tzL3VzZVJlc3BvbnNpdmUnXHJcblxyXG5jb25zdCBUQUJTID0ge1xyXG4gIFBBR0VfVklFVzogJ3BhZ2VWaWV3JyxcclxuICBVTklRVUVfVVNFUlM6ICd1bmlxdWVVc2VycycsXHJcbiAgQVZFUkFHRV9USU1FOiAnYXZlcmFnZVRpbWUnLFxyXG4gIEJPVU5DRV9SQVRFOiAnYm91bmNlUmF0ZScsXHJcbn1cclxuXHJcbmNvbnN0IFRBQl9DSEFSVF9VTklUUyA9IHtcclxuICBbVEFCUy5QQUdFX1ZJRVddOiBDSEFSVF9VTklULk5VTUJFUixcclxuICBbVEFCUy5VTklRVUVfVVNFUlNdOiBDSEFSVF9VTklULk5VTUJFUixcclxuICBbVEFCUy5BVkVSQUdFX1RJTUVdOiBDSEFSVF9VTklULlRJTUUsXHJcbiAgW1RBQlMuQk9VTkNFX1JBVEVdOiBDSEFSVF9VTklULlBFUkNFTlRBR0UsXHJcbn1cclxuXHJcbmNvbnN0IFNpdGVPcHRpb24gPSAoeyBvcHRpb24sIHZhbHVlIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpdGVPcHRpb259PlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zaXRlT3B0aW9uQ29sb3J9XHJcbiAgICAgIHN0eWxlPXtvcHRpb24udmFsdWUgPT09IHZhbHVlID8geyBiYWNrZ3JvdW5kQ29sb3I6IG9wdGlvbi5jb2xvciB9IDoge319XHJcbiAgICAvPlxyXG4gICAge29wdGlvbi5sYWJlbH1cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xyXG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZVJlc3BvbnNpdmUoKVxyXG4gIGNvbnN0IFtzaXRlRmlsdGVyLCBzZXRTaXRlRmlsdGVyXSA9IHVzZVN0YXRlKCdHbHlwaHkuaW8nKVxyXG4gIGNvbnN0IFtldmVudEZpbHRlciwgc2V0RXZlbnRGaWx0ZXJdID0gdXNlU3RhdGUoJ0FsbCcpXHJcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKFRBQlMuUEFHRV9WSUVXKVxyXG4gIGNvbnN0IGNoYW5nZVRhYiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKG5ld1RhYikgPT4ge1xyXG4gICAgICBzZXRUYWIobmV3VGFiKVxyXG4gICAgfSxcclxuICAgIFtzZXRUYWJdXHJcbiAgKVxyXG5cclxuICBjb25zdCBzZWxlY3RTaXRlRmlsdGVyID0gdXNlQ2FsbGJhY2soXHJcbiAgICAobmV3U2l0ZUZpbHRlcikgPT4ge1xyXG4gICAgICBzZXRTaXRlRmlsdGVyKG5ld1NpdGVGaWx0ZXIpXHJcbiAgICB9LFxyXG4gICAgW3NldFNpdGVGaWx0ZXJdXHJcbiAgKVxyXG5cclxuICBjb25zdCBzZWxlY3RFdmVudEZpbHRlciA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKG5ld0V2ZW50RmlsdGVyKSA9PiB7XHJcbiAgICAgIHNldEV2ZW50RmlsdGVyKG5ld0V2ZW50RmlsdGVyKVxyXG4gICAgfSxcclxuICAgIFtzZXRFdmVudEZpbHRlcl1cclxuICApXHJcblxyXG4gIGNvbnN0IHNpdGVEYXRhID0gdXNlTWVtbygoKSA9PiBfLmZpbmQoZGF0YS5zaXRlcywgeyBuYW1lOiBzaXRlRmlsdGVyIH0pLCBbXHJcbiAgICBkYXRhLnNpdGVzLFxyXG4gICAgc2l0ZUZpbHRlcixcclxuICBdKVxyXG5cclxuICBjb25zdCBzaXRlc0ZpbHRlck9wdGlvbnMgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT5cclxuICAgICAgZGF0YS5zaXRlcy5tYXAoKHNpdGUpID0+ICh7XHJcbiAgICAgICAgbGFiZWw6IHNpdGUubmFtZSxcclxuICAgICAgICBjb2xvcjogc2l0ZS5jb2xvcixcclxuICAgICAgICB2YWx1ZTogc2l0ZS5uYW1lLFxyXG4gICAgICB9KSksXHJcbiAgICBbZGF0YS5zaXRlc11cclxuICApXHJcblxyXG4gIGNvbnN0IGRhdGFDb250ZW50ID0gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhfSBrZXk9XCJkYXRhXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YUxpc3R9PlxyXG4gICAgICAgIDxUcmVuZHNMaXN0IGl0ZW1zPXtkYXRhLnRyZW5kc30gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFTZWVBbGx9PlxyXG4gICAgICAgICAgPHNwYW4+U2VlIEFsbDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFDaGFydH0+XHJcbiAgICAgICAgPENoYXJ0TGVnZW5kIHNlbGVjdGVkPXtzaXRlRmlsdGVyfSBpdGVtcz17c2l0ZXNGaWx0ZXJPcHRpb25zfSAvPlxyXG4gICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgY29sb3I9e3NpdGVEYXRhLmNvbG9yfVxyXG4gICAgICAgICAgZGF0YT17c2l0ZURhdGFbdGFiXX1cclxuICAgICAgICAgIHVuaXQ9e1RBQl9DSEFSVF9VTklUU1t0YWJdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRvcE5hdmlnYXRpb24gLz5cclxuXHJcbiAgICAgIDxQYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgICB0aXRsZT1cIkFuYWx5dGljc1wiXHJcbiAgICAgICAgICBhc2lkZT17XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyc30+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTaXRlc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2l0ZUZpbHRlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZWxlY3RTaXRlRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17c2l0ZXNGaWx0ZXJPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbkNvbXBvbmVudD17U2l0ZU9wdGlvbn1cclxuICAgICAgICAgICAgICAgIGZ1bGxcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRXZlbnRzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtldmVudEZpbHRlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZWxlY3RFdmVudEZpbHRlcn1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e1RPUF9FVkVOVFNfRklMVEVSX09QVElPTlN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICBmdWxsXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2FsZW5kYXJTZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIkF1ZyA3IC0gQXVnIDE1IDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyU2VsZWN0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxUYWJzIHNlbGVjdGVkPXt0YWJ9IG9uVGFiQ2xpY2s9e2NoYW5nZVRhYn0+XHJcbiAgICAgICAgICA8RGF0YUl0ZW1cclxuICAgICAgICAgICAgbmFtZT1cIlBhZ2V2aWV3c1wiXHJcbiAgICAgICAgICAgIGljb249XCJ0cmVuZFVwXCJcclxuICAgICAgICAgICAgdmFsdWU9XCIyMjMuNWtcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImFuIGluc3RhbmNlIG9mIGEgdXNlciB2aXNpdGluZyBhIHBhcnRpY3VsYXIgcGFnZSBvbiBhIHdlYnNpdGUuXCJcclxuICAgICAgICAgICAgZGVsdGE9ezE1fVxyXG4gICAgICAgICAgICB0YWI9e1RBQlMuUEFHRV9WSUVXfVxyXG4gICAgICAgICAgICBrZXk9e1RBQlMuUEFHRV9WSUVXfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpc01vYmlsZSAmJiB0YWIgPT09IFRBQlMuUEFHRV9WSUVXICYmIGRhdGFDb250ZW50fVxyXG4gICAgICAgICAgPERhdGFJdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJVbmlxdWUgVXNlcnNcIlxyXG4gICAgICAgICAgICBpY29uPVwidHJlbmRVcFwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiNzQuODU4XCJcclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJhbiBpbnN0YW5jZSBvZiBhIHVzZXIgdmlzaXRpbmcgYSBwYXJ0aWN1bGFyIHBhZ2Ugb24gYSB3ZWJzaXRlLlwiXHJcbiAgICAgICAgICAgIGRlbHRhPXstMTV9XHJcbiAgICAgICAgICAgIHRhYj17VEFCUy5VTklRVUVfVVNFUlN9XHJcbiAgICAgICAgICAgIGtleT17VEFCUy5VTklRVUVfVVNFUlN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2lzTW9iaWxlICYmIHRhYiA9PT0gVEFCUy5VTklRVUVfVVNFUlMgJiYgZGF0YUNvbnRlbnR9XHJcbiAgICAgICAgICA8RGF0YUl0ZW1cclxuICAgICAgICAgICAgbmFtZT1cIkF2ZXJhZ2UgdmlzaXQgdGltZVwiXHJcbiAgICAgICAgICAgIGljb249XCJjbG9ja1wiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiMDE6NDVcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImFuIGluc3RhbmNlIG9mIGEgdXNlciB2aXNpdGluZyBhIHBhcnRpY3VsYXIgcGFnZSBvbiBhIHdlYnNpdGUuXCJcclxuICAgICAgICAgICAgZGVsdGE9ezE1fVxyXG4gICAgICAgICAgICB0YWI9e1RBQlMuQVZFUkFHRV9USU1FfVxyXG4gICAgICAgICAgICBrZXk9e1RBQlMuQVZFUkFHRV9USU1FfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpc01vYmlsZSAmJiB0YWIgPT09IFRBQlMuQVZFUkFHRV9USU1FICYmIGRhdGFDb250ZW50fVxyXG4gICAgICAgICAgPERhdGFJdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJCb3VuY2UgUmF0ZVwiXHJcbiAgICAgICAgICAgIGljb249XCJicmFuY2hlc1wiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiMjUuNyVcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImFuIGluc3RhbmNlIG9mIGEgdXNlciB2aXNpdGluZyBhIHBhcnRpY3VsYXIgcGFnZSBvbiBhIHdlYnNpdGUuXCJcclxuICAgICAgICAgICAgZGVsdGE9ey0xNX1cclxuICAgICAgICAgICAgdGFiPXtUQUJTLkJPVU5DRV9SQVRFfVxyXG4gICAgICAgICAgICBrZXk9e1RBQlMuQk9VTkNFX1JBVEV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2lzTW9iaWxlICYmIHRhYiA9PT0gVEFCUy5CT1VOQ0VfUkFURSAmJiBkYXRhQ29udGVudH1cclxuICAgICAgICA8L1RhYnM+XHJcblxyXG4gICAgICAgIHshaXNNb2JpbGUgJiYgZGF0YUNvbnRlbnR9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeUNhcmRzfT5cclxuICAgICAgICAgIDxTdW1tYXJ5Q2FyZFxyXG4gICAgICAgICAgICB0aXRsZT1cIk1vc3QgQWN0aXZlIFNpdGVzXCJcclxuICAgICAgICAgICAgZGF0YT17ZGF0YS5tb3N0QWN0aXZlU2l0ZXN9XHJcbiAgICAgICAgICAgIGZpbHRlcj17e1xyXG4gICAgICAgICAgICAgIGxhYmVsOiAnU2l0ZXMnLFxyXG4gICAgICAgICAgICAgIG9wdGlvbnM6IE1PU1RfQUNUSVZFX1NJVEVTX0ZJTFRFUl9PUFRJT05TLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdW1tYXJ5Q2FyZFxyXG4gICAgICAgICAgICB0aXRsZT1cIk1vc3QgVmlzaXRlZCBTaXRlc1wiXHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGEubW9zdFZpc2l0ZWRTaXRlc31cclxuICAgICAgICAgICAgZmlsdGVyPXt7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdTb3J0JyxcclxuICAgICAgICAgICAgICBvcHRpb25zOiBNT1NUX1ZJU0lURURfU0lURVNfRklMVEVSX09QVElPTlMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN1bW1hcnlDYXJkXHJcbiAgICAgICAgICAgIHRpdGxlPVwiVG9wIEV2ZW50c1wiXHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGEudG9wRXZlbnRzfVxyXG4gICAgICAgICAgICBmaWx0ZXI9e3tcclxuICAgICAgICAgICAgICBsYWJlbDogJ0V2ZW50cycsXHJcbiAgICAgICAgICAgICAgb3B0aW9uczogVE9QX0VWRU5UU19GSUxURVJfT1BUSU9OUyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TmV3Q2FyZCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvUGFnZUNvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IG1vc3RWaXNpdGVkU2l0ZXMgPSBbXHJcbiAgICB7IGFiYnI6ICdESycsIGNvbG9yOiAnIzNERERBQScsIG5hbWU6ICdEcmF3a2l0JywgdmFsdWU6IDU2MTU2IH0sXHJcbiAgICB7XHJcbiAgICAgIGFiYnI6ICc0LzEwJyxcclxuICAgICAgY29sb3I6ICcjRkFGOEYzJyxcclxuICAgICAgZGFyazogdHJ1ZSxcclxuICAgICAgbmFtZTogJ1llc3RlcmRheScsXHJcbiAgICAgIHZhbHVlOiAxMzc0LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYWJicjogJzEtNycsXHJcbiAgICAgIGNvbG9yOiAnI0U2RjVGQScsXHJcbiAgICAgIGRhcms6IHRydWUsXHJcbiAgICAgIG5hbWU6ICdMYXN0IFdlZWsnLFxyXG4gICAgICB2YWx1ZTogMjA3NDgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBhYmJyOiAnU0VQJyxcclxuICAgICAgY29sb3I6ICcjRjBGNEZGJyxcclxuICAgICAgZGFyazogdHJ1ZSxcclxuICAgICAgbmFtZTogJ0xhc3QgTW9udGgnLFxyXG4gICAgICB2YWx1ZTogMzI4ODQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBhYmJyOiAnMjAxOScsXHJcbiAgICAgIGNvbG9yOiAnI0VGRkNGMCcsXHJcbiAgICAgIGRhcms6IHRydWUsXHJcbiAgICAgIG5hbWU6ICdMYXN0IFllYXInLFxyXG4gICAgICB2YWx1ZTogMTgyODc0LFxyXG4gICAgfSxcclxuICBdXHJcblxyXG4gIGNvbnN0IG1vc3RBY3RpdmVTaXRlcyA9IFtcclxuICAgIHsgYWJicjogJ0dMJywgY29sb3I6ICcjRkY5OTAwJywgbmFtZTogJ0dseXBoeScsIHZhbHVlOiA2NjQ4IH0sXHJcbiAgICB7XHJcbiAgICAgIGFiYnI6ICdEUycsXHJcbiAgICAgIGNvbG9yOiAnIzEyN0JGNScsXHJcbiAgICAgIG5hbWU6ICdEZXNpZ25TdHJpcGUnLFxyXG4gICAgICB2YWx1ZTogMTM3NCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGFiYnI6ICdEVicsXHJcbiAgICAgIGNvbG9yOiAnI0Y3Mzg1OScsXHJcbiAgICAgIG5hbWU6ICdEZXNpZ25WYWxsZXknLFxyXG4gICAgICB2YWx1ZTogMjA3NDgsXHJcbiAgICB9LFxyXG4gICAgeyBhYmJyOiAnREsnLCBjb2xvcjogJyMzREREQUEnLCBuYW1lOiAnTmV1ZXViZWwnLCB2YWx1ZTogMzI4ODQgfSxcclxuICAgIHtcclxuICAgICAgYWJicjogJ0RTJyxcclxuICAgICAgY29sb3I6ICcjMTI3QkY1JyxcclxuICAgICAgbmFtZTogJ0xhc3QgWWVhcicsXHJcbiAgICAgIHZhbHVlOiAxODI4NzQsXHJcbiAgICB9LFxyXG4gIF1cclxuXHJcbiAgY29uc3QgdG9wRXZlbnRzID0gW1xyXG4gICAgeyBhYmJyOiAnNS8xMCcsIGNvbG9yOiAnI0ZGOTkwMCcsIG5hbWU6ICdUb2RheScsIHZhbHVlOiA1NjE1NiB9LFxyXG4gICAge1xyXG4gICAgICBhYmJyOiAnNC8xMCcsXHJcbiAgICAgIGNvbG9yOiAnI0ZBRjhGMycsXHJcbiAgICAgIGRhcms6IHRydWUsXHJcbiAgICAgIG5hbWU6ICdZZXN0ZXJkYXknLFxyXG4gICAgICB2YWx1ZTogMTM3NCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGFiYnI6ICcxLTcnLFxyXG4gICAgICBjb2xvcjogJyNFNkY1RkEnLFxyXG4gICAgICBkYXJrOiB0cnVlLFxyXG4gICAgICBuYW1lOiAnTGFzdCBXZWVrJyxcclxuICAgICAgdmFsdWU6IDIwNzQ4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYWJicjogJ1NFUCcsXHJcbiAgICAgIGNvbG9yOiAnI0YwRjRGRicsXHJcbiAgICAgIGRhcms6IHRydWUsXHJcbiAgICAgIG5hbWU6ICdMYXN0IE1vbnRoJyxcclxuICAgICAgdmFsdWU6IDMyODg0LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYWJicjogJzIwMTknLFxyXG4gICAgICBjb2xvcjogJyNFRkZDRjAnLFxyXG4gICAgICBkYXJrOiB0cnVlLFxyXG4gICAgICBuYW1lOiAnTGFzdCBZZWFyJyxcclxuICAgICAgdmFsdWU6IDE4Mjg3NCxcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICBjb25zdCB0cmVuZHMgPSBbXHJcbiAgICB7IGFiYnI6ICdHTCcsIGNvbG9yOiAnI0ZGOTkwMCcsIHR5cGU6ICd1cCcsIHZhbHVlOiAyNjQ3MzggfSxcclxuICAgIHsgYWJicjogJ0RTJywgY29sb3I6ICcjMTI3QkY1JywgdHlwZTogJ2dvb2QnLCB2YWx1ZTogNjQ3MzggfSxcclxuICAgIHsgYWJicjogJ0dMJywgY29sb3I6ICcjRkY5OTAwJywgdHlwZTogJ3VwJywgdmFsdWU6IDIzNzM4IH0sXHJcbiAgICB7IGFiYnI6ICdESycsIGNvbG9yOiAnIzNERERBQScsIHR5cGU6ICdob3QnLCB2YWx1ZTogODgzNyB9LFxyXG4gICAgeyBhYmJyOiAnRFMnLCBjb2xvcjogJyMxMjdCRjUnLCB0eXBlOiAnYmFkJywgdmFsdWU6IDUzNzUgfSxcclxuICAgIHsgYWJicjogJ05CJywgY29sb3I6ICcjODQ4NjhBJywgdHlwZTogJ3VwJywgdmFsdWU6IDM5MjMgfSxcclxuICBdXHJcblxyXG4gIGNvbnN0IHNpdGVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnRHJhd0tpdCcsXHJcbiAgICAgIGNvbG9yOiAnIzNERERBQScsXHJcbiAgICAgIHBhZ2VWaWV3OiBbXHJcbiAgICAgICAgeyB2YWx1ZTogMCwgZGF0ZTogJ0phbicgfSxcclxuICAgICAgICB7IHZhbHVlOiA1MDAwLCBkYXRlOiAnRmViJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQwMDAsIGRhdGU6ICdNYXInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNTAwMCwgZGF0ZTogJ0FwcicgfSxcclxuICAgICAgICB7IHZhbHVlOiA0NTAwLCBkYXRlOiAnTWF5JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQ3MDAsIGRhdGU6ICdKdW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNTIwMCwgZGF0ZTogJ0p1bCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAxMjk0MywgZGF0ZTogJ0F1ZycgfSxcclxuICAgICAgICB7IHZhbHVlOiA1MDAwLCBkYXRlOiAnU2VwJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDYwMDAsIGRhdGU6ICdPY3QnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNTAwMCwgZGF0ZTogJ05vdicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxMzUwMCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgICAgdW5pcXVlVXNlcnM6IFtcclxuICAgICAgICB7IHZhbHVlOiAwLCBkYXRlOiAnSmFuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDI1MDAsIGRhdGU6ICdGZWInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjAwMCwgZGF0ZTogJ01hcicgfSxcclxuICAgICAgICB7IHZhbHVlOiAzMDAwLCBkYXRlOiAnQXByJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDI1MDAsIGRhdGU6ICdNYXknIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjcwMCwgZGF0ZTogJ0p1bicgfSxcclxuICAgICAgICB7IHZhbHVlOiAzMjAwLCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDc5NDMsIGRhdGU6ICdBdWcnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzAwMCwgZGF0ZTogJ1NlcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAyMDAwLCBkYXRlOiAnT2N0JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDMwMDAsIGRhdGU6ICdOb3YnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogOTUwMCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgICAgYXZlcmFnZVRpbWU6IFtcclxuICAgICAgICB7IHZhbHVlOiAxMDUsIGRhdGU6ICdKYW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNzAsIGRhdGU6ICdGZWInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjIwLCBkYXRlOiAnTWFyJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDE3OSwgZGF0ZTogJ0FwcicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxNTAsIGRhdGU6ICdNYXknIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTEwLCBkYXRlOiAnSnVuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDkwLCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDIyMCwgZGF0ZTogJ0F1ZycgfSxcclxuICAgICAgICB7IHZhbHVlOiAyODAsIGRhdGU6ICdTZXAnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzUwLCBkYXRlOiAnT2N0JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDE1MCwgZGF0ZTogJ05vdicgfSxcclxuICAgICAgICB7IHZhbHVlOiAyMDAsIGRhdGU6ICdEZWMnIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGJvdW5jZVJhdGU6IFtcclxuICAgICAgICB7IHZhbHVlOiAyNS43LCBkYXRlOiAnSmFuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEwLCBkYXRlOiAnRmViJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEzLCBkYXRlOiAnTWFyJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDM0LCBkYXRlOiAnQXByJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDE5LCBkYXRlOiAnTWF5JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDI1LCBkYXRlOiAnSnVuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDM3LCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDE1LCBkYXRlOiAnQXVnJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDE5LCBkYXRlOiAnU2VwJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDAsIGRhdGU6ICdPY3QnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTUsIGRhdGU6ICdOb3YnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjAsIGRhdGU6ICdEZWMnIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnRGVzaWduU3RyaXBlJyxcclxuICAgICAgY29sb3I6ICcjMUI3RkYzJyxcclxuICAgICAgcGFnZVZpZXc6IFtcclxuICAgICAgICB7IHZhbHVlOiAxMjMxMywgZGF0ZTogJ0phbicgfSxcclxuICAgICAgICB7IHZhbHVlOiAyMzIzLCBkYXRlOiAnRmViJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDIzNDIzLCBkYXRlOiAnTWFyJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQwMDAsIGRhdGU6ICdBcHInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTAwMCwgZGF0ZTogJ01heScgfSxcclxuICAgICAgICB7IHZhbHVlOiAzMDAwLCBkYXRlOiAnSnVuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQwMDAsIGRhdGU6ICdKdWwnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTAwMDAsIGRhdGU6ICdBdWcnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogOTAwMCwgZGF0ZTogJ1NlcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAxMjAwMCwgZGF0ZTogJ09jdCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAxMDAwMCwgZGF0ZTogJ05vdicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxMzUwMCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgICAgdW5pcXVlVXNlcnM6IFtcclxuICAgICAgICB7IHZhbHVlOiAyMDAwLCBkYXRlOiAnSmFuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDE1MDAsIGRhdGU6ICdGZWInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzAwMCwgZGF0ZTogJ01hcicgfSxcclxuICAgICAgICB7IHZhbHVlOiA1MDAwLCBkYXRlOiAnQXByJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDM1MDAsIGRhdGU6ICdNYXknIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNzcwMCwgZGF0ZTogJ0p1bicgfSxcclxuICAgICAgICB7IHZhbHVlOiAzMjAwLCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDI5NDMsIGRhdGU6ICdBdWcnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNDAwMCwgZGF0ZTogJ1NlcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiA1MDAwLCBkYXRlOiAnT2N0JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDYwMDAsIGRhdGU6ICdOb3YnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTI1MDAsIGRhdGU6ICdEZWMnIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGF2ZXJhZ2VUaW1lOiBbXHJcbiAgICAgICAgeyB2YWx1ZTogNTUsIGRhdGU6ICdKYW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTcwLCBkYXRlOiAnRmViJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQyMCwgZGF0ZTogJ01hcicgfSxcclxuICAgICAgICB7IHZhbHVlOiAyNzksIGRhdGU6ICdBcHInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNTAsIGRhdGU6ICdNYXknIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTAsIGRhdGU6ICdKdW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTkwLCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDIwMCwgZGF0ZTogJ0F1ZycgfSxcclxuICAgICAgICB7IHZhbHVlOiAxODAsIGRhdGU6ICdTZXAnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjUwLCBkYXRlOiAnT2N0JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDI1MCwgZGF0ZTogJ05vdicgfSxcclxuICAgICAgICB7IHZhbHVlOiA0MCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgICAgYm91bmNlUmF0ZTogW1xyXG4gICAgICAgIHsgdmFsdWU6IDE1LjcsIGRhdGU6ICdKYW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjAsIGRhdGU6ICdGZWInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjMsIGRhdGU6ICdNYXInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTQsIGRhdGU6ICdBcHInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjksIGRhdGU6ICdNYXknIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTUsIGRhdGU6ICdKdW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjcsIGRhdGU6ICdKdWwnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNSwgZGF0ZTogJ0F1ZycgfSxcclxuICAgICAgICB7IHZhbHVlOiAyOSwgZGF0ZTogJ1NlcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAzMCwgZGF0ZTogJ09jdCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAyNSwgZGF0ZTogJ05vdicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxMCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdHbHlwaHkuaW8nLFxyXG4gICAgICBjb2xvcjogJyNGRjk5MDAnLFxyXG4gICAgICBwYWdlVmlldzogW1xyXG4gICAgICAgIHsgdmFsdWU6IDcwMDAsIGRhdGU6ICdKYW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNTAwMCwgZGF0ZTogJ0ZlYicgfSxcclxuICAgICAgICB7IHZhbHVlOiA0MDAwLCBkYXRlOiAnTWFyJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDUwMDAsIGRhdGU6ICdBcHInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNDUwMCwgZGF0ZTogJ01heScgfSxcclxuICAgICAgICB7IHZhbHVlOiA0NzAwLCBkYXRlOiAnSnVuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEwMDAwLCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEyMDAwLCBkYXRlOiAnQXVnJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDUwMDAsIGRhdGU6ICdTZXAnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNjAwMCwgZGF0ZTogJ09jdCcgfSxcclxuICAgICAgICB7IHZhbHVlOiA1MDAwLCBkYXRlOiAnTm92JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEzNTAwLCBkYXRlOiAnRGVjJyB9LFxyXG4gICAgICBdLFxyXG4gICAgICB1bmlxdWVVc2VyczogW1xyXG4gICAgICAgIHsgdmFsdWU6IDYwMDAsIGRhdGU6ICdKYW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNDUwMCwgZGF0ZTogJ0ZlYicgfSxcclxuICAgICAgICB7IHZhbHVlOiAzMDAwLCBkYXRlOiAnTWFyJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDcwMDAsIGRhdGU6ICdBcHInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogOTUwMCwgZGF0ZTogJ01heScgfSxcclxuICAgICAgICB7IHZhbHVlOiAxNzcwMCwgZGF0ZTogJ0p1bicgfSxcclxuICAgICAgICB7IHZhbHVlOiA3MjAwLCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDI5NDMsIGRhdGU6ICdBdWcnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogODAwMCwgZGF0ZTogJ1NlcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiA1MDAwLCBkYXRlOiAnT2N0JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDkwMDAsIGRhdGU6ICdOb3YnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjUwMCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgICAgYXZlcmFnZVRpbWU6IFtcclxuICAgICAgICB7IHZhbHVlOiAzNTUsIGRhdGU6ICdKYW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNzAsIGRhdGU6ICdGZWInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjIwLCBkYXRlOiAnTWFyJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDE3OSwgZGF0ZTogJ0FwcicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxNTAsIGRhdGU6ICdNYXknIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzEwLCBkYXRlOiAnSnVuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDkwLCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEwMCwgZGF0ZTogJ0F1ZycgfSxcclxuICAgICAgICB7IHZhbHVlOiAyODAsIGRhdGU6ICdTZXAnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTUwLCBkYXRlOiAnT2N0JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQ1MCwgZGF0ZTogJ05vdicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxNDAsIGRhdGU6ICdEZWMnIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGJvdW5jZVJhdGU6IFtcclxuICAgICAgICB7IHZhbHVlOiAzNS43LCBkYXRlOiAnSmFuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQwLCBkYXRlOiAnRmViJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEzLCBkYXRlOiAnTWFyJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDM0LCBkYXRlOiAnQXByJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDU5LCBkYXRlOiAnTWF5JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDM1LCBkYXRlOiAnSnVuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDM3LCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDE1LCBkYXRlOiAnQXVnJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDM5LCBkYXRlOiAnU2VwJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDMwLCBkYXRlOiAnT2N0JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQ1LCBkYXRlOiAnTm92JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDMwLCBkYXRlOiAnRGVjJyB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0Rlc2lnbnZhbGxleS5jbHViJyxcclxuICAgICAgY29sb3I6ICcjNTcxREZFJyxcclxuICAgICAgcGFnZVZpZXc6IFtcclxuICAgICAgICB7IHZhbHVlOiA3NzAsIGRhdGU6ICdKYW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzAwLCBkYXRlOiAnRmViJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEwMDAsIGRhdGU6ICdNYXInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjAwMCwgZGF0ZTogJ0FwcicgfSxcclxuICAgICAgICB7IHZhbHVlOiA0NTAwLCBkYXRlOiAnTWF5JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDcwMDAsIGRhdGU6ICdKdW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNTIwMCwgZGF0ZTogJ0p1bCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAxOTQzLCBkYXRlOiAnQXVnJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDExMDAwLCBkYXRlOiAnU2VwJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDUwMDAsIGRhdGU6ICdPY3QnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNzAwMCwgZGF0ZTogJ05vdicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxMzUwMCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgICAgdW5pcXVlVXNlcnM6IFtcclxuICAgICAgICB7IHZhbHVlOiAyMDAwLCBkYXRlOiAnSmFuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDM1MDAsIGRhdGU6ICdGZWInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNDAwMCwgZGF0ZTogJ01hcicgfSxcclxuICAgICAgICB7IHZhbHVlOiA4MDAwLCBkYXRlOiAnQXByJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDU1MDAsIGRhdGU6ICdNYXknIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNzcwMCwgZGF0ZTogJ0p1bicgfSxcclxuICAgICAgICB7IHZhbHVlOiA0MjAwLCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQ5NDMsIGRhdGU6ICdBdWcnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNjAwMCwgZGF0ZTogJ1NlcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiA3MDAwLCBkYXRlOiAnT2N0JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQwMDAsIGRhdGU6ICdOb3YnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNTUwMCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgICAgYXZlcmFnZVRpbWU6IFtcclxuICAgICAgICB7IHZhbHVlOiAxNTUsIGRhdGU6ICdKYW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTcwLCBkYXRlOiAnRmViJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEyMCwgZGF0ZTogJ01hcicgfSxcclxuICAgICAgICB7IHZhbHVlOiAyNzksIGRhdGU6ICdBcHInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzUwLCBkYXRlOiAnTWF5JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDIxMCwgZGF0ZTogJ0p1bicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxOTAsIGRhdGU6ICdKdWwnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjAwLCBkYXRlOiAnQXVnJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDE4MCwgZGF0ZTogJ1NlcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAzNTAsIGRhdGU6ICdPY3QnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTUwLCBkYXRlOiAnTm92JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDM0MCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgICAgYm91bmNlUmF0ZTogW1xyXG4gICAgICAgIHsgdmFsdWU6IDI1LjcsIGRhdGU6ICdKYW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzAsIGRhdGU6ICdGZWInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjMsIGRhdGU6ICdNYXInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjQsIGRhdGU6ICdBcHInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNDksIGRhdGU6ICdNYXknIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzUsIGRhdGU6ICdKdW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTcsIGRhdGU6ICdKdWwnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjUsIGRhdGU6ICdBdWcnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNTksIGRhdGU6ICdTZXAnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzAsIGRhdGU6ICdPY3QnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMjUsIGRhdGU6ICdOb3YnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTAsIGRhdGU6ICdEZWMnIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnTmV1YmVsJyxcclxuICAgICAgY29sb3I6ICcjMEMxNzJFJyxcclxuICAgICAgcGFnZVZpZXc6IFtcclxuICAgICAgICB7IHZhbHVlOiAxMDAwLCBkYXRlOiAnSmFuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDIwMDAsIGRhdGU6ICdGZWInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzAwMCwgZGF0ZTogJ01hcicgfSxcclxuICAgICAgICB7IHZhbHVlOiA0MDAwLCBkYXRlOiAnQXByJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDU1MDAsIGRhdGU6ICdNYXknIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNjcwMCwgZGF0ZTogJ0p1bicgfSxcclxuICAgICAgICB7IHZhbHVlOiA3MjAwLCBkYXRlOiAnSnVsJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDgyOTQsIGRhdGU6ICdBdWcnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogOTAwMCwgZGF0ZTogJ1NlcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiA2MDAwLCBkYXRlOiAnT2N0JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDUwMDAsIGRhdGU6ICdOb3YnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTM1MDAsIGRhdGU6ICdEZWMnIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHVuaXF1ZVVzZXJzOiBbXHJcbiAgICAgICAgeyB2YWx1ZTogMTAwMCwgZGF0ZTogJ0phbicgfSxcclxuICAgICAgICB7IHZhbHVlOiA0NTAwLCBkYXRlOiAnRmViJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDMwMDAsIGRhdGU6ICdNYXInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzAwMCwgZGF0ZTogJ0FwcicgfSxcclxuICAgICAgICB7IHZhbHVlOiA0NTAwLCBkYXRlOiAnTWF5JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDU3MDAsIGRhdGU6ICdKdW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogNDIwMCwgZGF0ZTogJ0p1bCcgfSxcclxuICAgICAgICB7IHZhbHVlOiA3OTQzLCBkYXRlOiAnQXVnJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDMwMDAsIGRhdGU6ICdTZXAnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogODAwMCwgZGF0ZTogJ09jdCcgfSxcclxuICAgICAgICB7IHZhbHVlOiA2MDAwLCBkYXRlOiAnTm92JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEyNTAwLCBkYXRlOiAnRGVjJyB9LFxyXG4gICAgICBdLFxyXG4gICAgICBhdmVyYWdlVGltZTogW1xyXG4gICAgICAgIHsgdmFsdWU6IDU1LCBkYXRlOiAnSmFuJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDI3MCwgZGF0ZTogJ0ZlYicgfSxcclxuICAgICAgICB7IHZhbHVlOiAzMjAsIGRhdGU6ICdNYXInIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTc5LCBkYXRlOiAnQXByJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDQ1MCwgZGF0ZTogJ01heScgfSxcclxuICAgICAgICB7IHZhbHVlOiAxMTAsIGRhdGU6ICdKdW4nIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogOTAsIGRhdGU6ICdKdWwnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTAwLCBkYXRlOiAnQXVnJyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDI4MCwgZGF0ZTogJ1NlcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAyNTAsIGRhdGU6ICdPY3QnIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzUwLCBkYXRlOiAnTm92JyB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDE0MCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgICAgYm91bmNlUmF0ZTogW1xyXG4gICAgICAgIHsgdmFsdWU6IDUuNywgZGF0ZTogJ0phbicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxMCwgZGF0ZTogJ0ZlYicgfSxcclxuICAgICAgICB7IHZhbHVlOiAyMywgZGF0ZTogJ01hcicgfSxcclxuICAgICAgICB7IHZhbHVlOiAxNCwgZGF0ZTogJ0FwcicgfSxcclxuICAgICAgICB7IHZhbHVlOiAzOSwgZGF0ZTogJ01heScgfSxcclxuICAgICAgICB7IHZhbHVlOiAyNSwgZGF0ZTogJ0p1bicgfSxcclxuICAgICAgICB7IHZhbHVlOiAzNywgZGF0ZTogJ0p1bCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAxNSwgZGF0ZTogJ0F1ZycgfSxcclxuICAgICAgICB7IHZhbHVlOiAyOSwgZGF0ZTogJ1NlcCcgfSxcclxuICAgICAgICB7IHZhbHVlOiAyMCwgZGF0ZTogJ09jdCcgfSxcclxuICAgICAgICB7IHZhbHVlOiA0NSwgZGF0ZTogJ05vdicgfSxcclxuICAgICAgICB7IHZhbHVlOiAzMCwgZGF0ZTogJ0RlYycgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICBjb25zdCBkYXRhID0geyBtb3N0VmlzaXRlZFNpdGVzLCBtb3N0QWN0aXZlU2l0ZXMsIHRvcEV2ZW50cywgdHJlbmRzLCBzaXRlcyB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3VtbWFyeUNhcmRzXCI6IFwiaW5kZXhfc3VtbWFyeUNhcmRzX18yOUtwdlwiLFxuXHRcImRhdGFcIjogXCJpbmRleF9kYXRhX18xZnlhdVwiLFxuXHRcImRhdGFMaXN0XCI6IFwiaW5kZXhfZGF0YUxpc3RfX3RCaDFWXCIsXG5cdFwiZGF0YUNoYXJ0XCI6IFwiaW5kZXhfZGF0YUNoYXJ0X18zUXJIUFwiLFxuXHRcImRhdGFTZWVBbGxcIjogXCJpbmRleF9kYXRhU2VlQWxsX18xWGcyNlwiLFxuXHRcImZpbHRlcnNcIjogXCJpbmRleF9maWx0ZXJzX18zbDl5ZVwiLFxuXHRcImZpbHRlclNlbGVjdFwiOiBcImluZGV4X2ZpbHRlclNlbGVjdF9fMU94QWRcIixcblx0XCJzaXRlT3B0aW9uQ29sb3JcIjogXCJpbmRleF9zaXRlT3B0aW9uQ29sb3JfX0F6UVJtXCIsXG5cdFwic2l0ZU9wdGlvblwiOiBcImluZGV4X3NpdGVPcHRpb25fXzMybFBTXCJcbn07XG4iLCJleHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyID0gKHZhbHVlKSA9PiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQodmFsdWUpXHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyU2hvcnQgPSAobnVtLCBkaWdpdHMgPSAwKSA9PiB7XHJcbiAgY29uc3QgdW5pdHMgPSBbJ2snLCAnTScsICdHJywgJ1QnLCAnUCcsICdFJywgJ1onLCAnWSddXHJcblxyXG4gIGZvciAobGV0IGkgPSB1bml0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgbGV0IGRlY2ltYWwgPSBNYXRoLnBvdygxMDAwLCBpICsgMSlcclxuXHJcbiAgICBpZiAobnVtIDw9IC1kZWNpbWFsIHx8IG51bSA+PSBkZWNpbWFsKSB7XHJcbiAgICAgIHJldHVybiArKG51bSAvIGRlY2ltYWwpLnRvRml4ZWQoZGlnaXRzKSArIHVuaXRzW2ldXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVtXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRGdWxsTmFtZSA9IChmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PiB7XHJcbiAgbGV0IGZ1bGxOYW1lID0gJydcclxuXHJcbiAgaWYgKGZpcnN0TmFtZSAmJiBsYXN0TmFtZSkge1xyXG4gICAgZnVsbE5hbWUgPSBmaXJzdE5hbWUgKyAnICcgKyBsYXN0TmFtZVxyXG4gIH0gZWxzZSBpZiAoZmlyc3ROYW1lIHx8IGxhc3ROYW1lKSB7XHJcbiAgICBmdWxsTmFtZSA9IGZpcnN0TmFtZSB8fCBsYXN0TmFtZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZ1bGxOYW1lXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRNaW51dGVzID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodmFsdWUgLyA2MClcclxuICBjb25zdCBzZWNvbmRzID0gdmFsdWUgJSA2MFxyXG4gIGNvbnN0IHNlY29uZHNTdHIgPSBzZWNvbmRzIDwgMTAgPyBgJHtzZWNvbmRzfTBgIDogc2Vjb25kc1xyXG5cclxuICByZXR1cm4gYCR7bWludXRlc306JHtzZWNvbmRzU3RyfWBcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2V0VGV4dFdpZHRoID0gKHRleHQsIGZvbnQpID0+IHtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuICdhdXRvJ1xyXG4gIH1cclxuICAvLyByZS11c2UgY2FudmFzIG9iamVjdCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXHJcbiAgY29uc3QgY2FudmFzID1cclxuICAgIGdldFRleHRXaWR0aC5jYW52YXMgfHxcclxuICAgIChnZXRUZXh0V2lkdGguY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykpXHJcblxyXG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gIGNvbnRleHQuZm9udCA9IGZvbnRcclxuXHJcbiAgY29uc3QgbWV0cmljcyA9IGNvbnRleHQubWVhc3VyZVRleHQodGV4dClcclxuXHJcbiAgcmV0dXJuIG1ldHJpY3Mud2lkdGhcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcG9wcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWNoYXJ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9