(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-slider", [], factory);
	else if(typeof exports === 'object')
		exports["x-slider"] = factory();
	else
		root["x-slider"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 231);
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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.off = off;
exports.once = once;
exports.clickOutside = clickOutside;
function on(el, event, callback) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  el.addEventListener(event, callback, useCapture);
}

function off(el, event, callback) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  el.removeEventListener(event, callback, useCapture);
}

function once(el, event, callback) {
  function trigger() {
    callback && callback.apply(this, arguments);
    off(el, event, trigger);
  }
  on(el, event, trigger);
}

function clickOutside(el, callback, useCapture) {
  if (typeof el === 'function') {
    callback = el;
    el = '';
  }
  el.clickOutside = function (event) {
    var state = false;

    el = [].concat(el);
    if (el.length) {
      for (var i = 0; i < el.length; i++) {
        if (el[i].contains(event.target) === false) {
          state = true;
          break;
        }
      }
    } else {
      state = true;
    }
    if (state && callback) {
      callback();
      el.clickOutside = null;
    }
  };
  on(document, 'click', el.clickOutside, useCapture);
}

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xSlider = __webpack_require__(232);

var _xSlider2 = _interopRequireDefault(_xSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _xSlider2.default;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(233),
  /* template */
  __webpack_require__(237),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(19);

var _sliderButton = __webpack_require__(234);

var _sliderButton2 = _interopRequireDefault(_sliderButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    value: {
      type: [Number, Array]
    },
    type: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      sliderValue: this.value,
      handleType: '',
      minPosition: 0,
      minVal: this.min,
      maxPosition: 0,
      maxVal: 0,
      barWidth: 0,
      barLeft: 0
    };
  },

  computed: {
    stepLength: function stepLength() {
      return this.$el.getBoundingClientRect().width / (this.max - this.min);
    }
  },
  methods: {
    buttonMousedown: function buttonMousedown(event, type) {
      if (this.disabled) return false;
      event.preventDefault();
      this.handleType = type;
      this.startPosition = event.clientX;
      switch (type) {
        case 'min':
          this.endPosition = this.minPosition;
          break;
        case 'max':
          this.endPosition = this.maxPosition;
          break;
      }
      (0, _dom.on)(document, 'mousemove', this.mousemove);
      (0, _dom.on)(document, 'mouseup', this.mouseup);
    },
    mousemove: function mousemove(event) {
      event.preventDefault();
      var left = this.endPosition + (event.clientX - this.startPosition),
          position = 0,
          value = 0;
      var isMax = this.handleType === 'min';
      value = Math.round(left / this.stepLength);

      value = this.judgeVal(value);
      position = value * this.stepLength;

      if (position === (isMax ? this.minPosition : this.maxPosition)) return;
      value = value + this.min;
      isMax ? this.setMinPosition(value, position) : this.setMaxPosition(value, position);
      value = this.range ? [this.minVal, this.maxVal] : this.maxVal;
      this.$emit('input', value);
      this.$emit('change', value, this.$el);
    },
    mouseup: function mouseup() {
      (0, _dom.off)(document, 'mousemove', this.mousemove);
      (0, _dom.off)(document, 'mouseup', this.mouseup);
    },
    setMinPosition: function setMinPosition(value, position) {
      this.barWidth = this.maxPosition - position;
      this.minPosition = this.barLeft = position;
      this.minVal = value;
    },
    setMaxPosition: function setMaxPosition(value, position) {
      this.barWidth = position - this.minPosition;
      this.maxPosition = position;
      this.maxVal = value;
    },
    judgeVal: function judgeVal(value, handleType) {
      var newValue = value + this.min;
      if (this.range) {
        handleType = handleType || this.handleType;
        switch (handleType) {
          case 'min':
            if (newValue > this.maxVal) {
              value = this.maxVal - this.min;
            } else if (newValue < this.min) {
              value = 0;
            }
            break;
          case 'max':
            if (newValue < this.minVal) {
              value = this.minVal - this.min;
            } else if (newValue > this.max) {
              value = this.max - this.min;
            }
            break;
        }
        return value;
      }
      if (newValue > this.max) {
        value = this.max - this.min;
      } else if (newValue < this.min) {
        value = 0;
      }
      return value;
    },
    changeValue: function changeValue() {
      var value = this.sliderValue;
      if (Array.isArray(value)) {
        this.setMaxPosition(value[1], this.judgeVal(value[1] - this.min, 'max') * this.stepLength);
        this.setMinPosition(value[0], this.judgeVal(value[0] - this.min, 'min') * this.stepLength);
      } else {
        this.setMaxPosition(value, this.judgeVal(value - this.min, 'min') * this.stepLength);
      }
    }
  },
  watch: {
    value: function value(_value) {
      if (this.disabled || _value === this.sliderValue) return;
      this.sliderValue = _value;
      this.changeValue();
    }
  },
  components: {
    sliderButton: _sliderButton2.default
  },
  mounted: function mounted() {
    if (!this.sliderValue) return;
    var value = this.sliderValue;
    if (this.range) {
      value[0] = Math.max(this.min, value[0]);
      value[1] = Math.max(this.min, Math.min(this.max, value[1]));
    } else {
      this.sliderValue = Math.max(this.min, Math.min(this.max, value));
    }
    this.sliderValue && this.changeValue();
  }
};

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(235),
  /* template */
  __webpack_require__(236),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    position: Number,
    value: Number,
    type: String
  },
  methods: {
    mousedown: function mousedown($event) {
      this.$emit('mousedown', $event, this.type);
    }
  }
};

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-slider-handle x-slider-min",
    style: ({
      'left': (_vm.position + "px")
    }),
    on: {
      "mousedown": _vm.mousedown
    }
  }, [_c('div', {
    staticClass: "x-tooltip x-tooltip-top"
  }, [_c('div', {
    staticClass: "x-tooltip-text"
  }, [_vm._v(_vm._s(_vm.value))])])])
},staticRenderFns: []}

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-slider-box",
    class: [
      'x-slider-' + _vm.type,
      {
        'x-disabled': _vm.disabled
      }
    ]
  }, [(_vm.range) ? _c('slider-button', {
    attrs: {
      "type": "min",
      "position": _vm.minPosition
    },
    on: {
      "mousedown": _vm.buttonMousedown
    },
    model: {
      value: (_vm.minVal),
      callback: function($$v) {
        _vm.minVal = $$v
      },
      expression: "minVal"
    }
  }) : _vm._e(), _vm._v(" "), _c('slider-button', {
    attrs: {
      "type": "max",
      "position": _vm.maxPosition
    },
    on: {
      "mousedown": _vm.buttonMousedown
    },
    model: {
      value: (_vm.maxVal),
      callback: function($$v) {
        _vm.maxVal = $$v
      },
      expression: "maxVal"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "x-slider-bar",
    style: ({
      'width': (_vm.barWidth + "px"),
      'left': (_vm.barLeft + "px")
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "x-slider-tip"
  })], 1)
},staticRenderFns: []}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map