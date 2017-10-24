(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-textarea", [], factory);
	else if(typeof exports === 'object')
		exports["x-textarea"] = factory();
	else
		root["x-textarea"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 266);
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

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xTextarea = __webpack_require__(267);

var _xTextarea2 = _interopRequireDefault(_xTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _xTextarea2.default;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(268),
  /* template */
  __webpack_require__(269),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xInputBox = __webpack_require__(55);

var _xInputBox2 = _interopRequireDefault(_xInputBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_xInputBox2.default]
};

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-textarea-box",
    class: [
      ("x-textarea-" + _vm.size),
      _vm.type && ("x-textarea-" + _vm.type),
      {
        'x-inline': _vm.inline
      }
    ]
  }, [_c('textarea', {
    staticClass: "x-textarea",
    class: {
      'x-radius': _vm.radius
    },
    attrs: {
      "validateevent": "true",
      "type": "textarea",
      "autocomplete": "off",
      "placeholder": _vm.placeholder,
      "maxlength": _vm.max,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.inputValue
    },
    on: {
      "input": _vm.input,
      "blur": _vm.blur,
      "focus": _vm.focus
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    max: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      inputValue: this.value
    };
  },

  methods: {
    input: function input(_ref) {
      var target = _ref.target;

      this.$emit('input', target.value);
      this.$emit('change', target.value, target);
    },
    blur: function blur(_ref2) {
      var target = _ref2.target;

      this.$emit('blur', target.value, target);
    },
    focus: function focus(_ref3) {
      var target = _ref3.target;

      this.$emit('focus', target.value, target);
    }
  },
  watch: {
    value: function value(_value) {
      if (_value === this.inputValue || this.disabled) return;
      this.inputValue = _value;
    }
  }
};

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map