(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-form", [], factory);
	else if(typeof exports === 'object')
		exports["x-form"] = factory();
	else
		root["x-form"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 139);
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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xForm = __webpack_require__(140);

var _xForm2 = _interopRequireDefault(_xForm);

var _xFormItem = __webpack_require__(143);

var _xFormItem2 = _interopRequireDefault(_xFormItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  xForm: _xForm2.default,
  xFormItem: _xFormItem2.default
};

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(141),
  /* template */
  __webpack_require__(142),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    labelPosition: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    pane: {
      type: Boolean,
      default: false
    }
  }
};

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-form",
    class: [
      _vm.pane === false && _vm.labelPosition && 'x-form-label-' + _vm.labelPosition,
      {
        'x-form-pane': _vm.pane
      }
    ]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(144),
  /* template */
  __webpack_require__(145),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    isTextarea: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    labelW: function labelW() {
      if (this.FORM.labelPosition === 'top' || this.isTextarea) return '';
      return this.labelWidth || this.FORM.labelWidth;
    },
    FORM: function FORM() {
      return this.$parent;
    }
  }
};

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-form-item",
    class: {
      'x-form-item-pane': _vm.$slots.label || _vm.label,
        'x-textarea-pane': _vm.isTextarea
    }
  }, [(_vm.$slots.label || _vm.label) ? _c('label', {
    staticClass: "x-form-label",
    style: ([_vm.labelW ? {
      width: _vm.labelW
    } : ''])
  }, [_vm._t("label", [_vm._v(_vm._s(_vm.label))])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x-form-content",
    style: ([_vm.labelW ? {
      marginLeft: _vm.labelW
    } : ''])
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.placeholder) ? _c('p', {
    staticClass: "x-form-msg"
  }, [_vm._v(_vm._s(_vm.placeholder))]) : _vm._e()])
},staticRenderFns: []}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map