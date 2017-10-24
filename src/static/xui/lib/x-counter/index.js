(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-counter", [], factory);
	else if(typeof exports === 'object')
		exports["x-counter"] = factory();
	else
		root["x-counter"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 115);
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

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xCounter = __webpack_require__(116);

var _xCounter2 = _interopRequireDefault(_xCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _xCounter2.default;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(117),
  /* template */
  __webpack_require__(118),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    value: {
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String
    },
    max: Number,
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      inputValue: this.value,
      count: 0,

      interval: ''
    };
  },

  methods: {
    input: function input(event) {
      var value = event.target.value;

      if (!this.isNumber(value)) {
        value = this.inputValue;
      }
      event.target.value = value = this.judgeScope(value);
      this.emit(value);
    },
    isNumber: function isNumber(value) {
      return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/.test(value + '')
      );
    },
    add: function add() {
      if (this.maxDisabled || this.disabled) return;
      var value = this.inputValue;
      value = this.addStep(value, this.step);
      this.inputValue = this.isMax(value);
      this.emit(this.inputValue);
    },
    reduction: function reduction() {
      if (this.minDisabled || this.disabled) return;
      var value = this.inputValue;
      value = this.addStep(value, -this.step);
      this.inputValue = this.isMin(value);
      this.emit(this.inputValue);
    },
    isMax: function isMax(value) {
      if (value > this.max) {
        return this.max;
      }
      return value;
    },
    isMin: function isMin(value) {
      if (value < this.min) {
        return this.min;
      }
      return value;
    },
    judgeScope: function judgeScope(value) {
      value = this.isMax(value);
      value = this.isMin(value);
      return value || this.min;
    },
    emit: function emit(value) {
      value = Number(value);
      this.$emit('input', value);
      this.$emit('change', value);
    },
    addStep: function addStep(value, step) {
      var r1 = void 0,
          r2 = void 0,
          m = void 0;
      try {
        r1 = value.toString().split('.')[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = step.toString().split('.')[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2));
      return (value * m + step * m) / m;
    }
  },
  computed: {
    minDisabled: function minDisabled() {
      return this.inputValue <= this.min;
    },
    maxDisabled: function maxDisabled() {
      return this.inputValue >= this.max;
    }
  },
  watch: {
    value: function value(_value) {
      if (_value === this.inputValue) return;
      this.inputValue = this.judgeScope(_value);
    }
  }
};

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-counter",
    class: [
      ("x-counter-" + _vm.size),
      _vm.type && ("x-counter-" + _vm.type),
      {
        'x-disabled': _vm.disabled
      }
    ]
  }, [_c('div', {
    staticClass: "x-counter-btn x-counter-reduction",
    class: {
      'x-min-disabled': _vm.minDisabled
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.reduction($event)
      }
    }
  }, [_c('i', {
    staticClass: "x-icon-minus"
  })]), _vm._v(" "), _c('input', {
    staticClass: "x-counter-input",
    attrs: {
      "type": "text",
      "disabled": _vm.disabled,
      "maxlength": _vm.max
    },
    domProps: {
      "value": _vm.inputValue
    },
    on: {
      "input": _vm.input
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "x-counter-btn x-counter-add",
    class: {
      'x-max-disabled': _vm.maxDisabled
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.add($event)
      }
    }
  }, [_c('i', {
    staticClass: "x-icon-plus"
  })])])
},staticRenderFns: []}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map