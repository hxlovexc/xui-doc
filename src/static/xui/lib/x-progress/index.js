(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-progress", [], factory);
	else if(typeof exports === 'object')
		exports["x-progress"] = factory();
	else
		root["x-progress"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 192);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xProgress = __webpack_require__(193);

var _xProgress2 = _interopRequireDefault(_xProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _xProgress2.default;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(195),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'default'
    },
    radius: {
      type: Boolean,
      default: false
    },
    percentage: {
      type: Number,
      default: 0
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      typesColor: {
        primary: '#4399ff',
        success: '#46be8a',
        warning: '#f2a654',
        danger: '#f96868',
        dark: '#667180'
      }
    };
  },

  computed: {
    curPercentage: function curPercentage() {
      return this.percentage > 100 ? 100 : this.percentage;
    },
    length: function length() {
      return 295.31 * (this.curPercentage / 100) + 'px';
    }
  }
};

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['x-progress' + (_vm.circle ? '-circle-box' : '')]
  }, [(_vm.circle) ? _c('div', {
    staticClass: "x-progress-circle"
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 100 100"
    }
  }, [_c('path', {
    attrs: {
      "d": "M 50, 50 m 0, -47 a 47, 47 0 1 1 0, 94 a 47, 47 0 1 1 0, -94",
      "stroke": "#e4eaec",
      "stroke-width": "6",
      "fill-opacity": "0"
    }
  }), _vm._v(" "), _c('path', {
    style: ('stroke-dasharray:' + _vm.length + ', 295.31px;'),
    attrs: {
      "d": "M 50, 50 m 0, -47 a 47, 47 0 1 1 0, 94 a 47, 47 0 1 1 0, -94",
      "stroke": _vm.typesColor[_vm.type],
      "stroke-width": "6",
      "fill-opacity": "0"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "x-progress-circle-text"
  }, [_c('span', [_vm._t("default", [_c('p', {
    staticClass: "x-progress-text"
  }, [_vm._v(_vm._s(_vm.curPercentage) + "%")])])], 2)])]) : _c('div', {
    staticClass: "x-progress-bar-box",
    class: [
      'x-progress-' + _vm.type,
      'x-progress-' + _vm.size,
      {
        'x-radius': _vm.radius
      }
    ]
  }, [(_vm.curPercentage > 0) ? _c('div', {
    staticClass: "x-progress-bar",
    style: ({
      width: _vm.curPercentage + '%'
    })
  }) : _vm._e()])])
},staticRenderFns: []}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map