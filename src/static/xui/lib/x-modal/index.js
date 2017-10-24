(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-modal", [], factory);
	else if(typeof exports === 'object')
		exports["x-modal"] = factory();
	else
		root["x-modal"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 174);
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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xModal = __webpack_require__(175);

var _xModal2 = _interopRequireDefault(_xModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _xModal2.default;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(177),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(19);

exports.default = {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'default'
    },
    mask: {
      type: Boolean,
      default: true
    },
    close: Function,
    escClose: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      isShow: this.value
    };
  },

  watch: {
    value: function value(_value) {
      if (_value !== this.isShow) {
        _value ? this.bindEvent() : this.hide();
        this.isShow = _value;
      }
    }
  },
  methods: {
    hide: function hide() {
      this.$emit('input', false);
      this.$emit('close');
      (0, _dom.off)(window, 'keyup', this.escCloseFun);
    },
    escCloseFun: function escCloseFun(_ref) {
      var keyCode = _ref.keyCode;

      keyCode === 27 && this.escClose && this.hide();
    },
    bindEvent: function bindEvent() {
      this.$emit('open');
      (0, _dom.on)(window, 'keyup', this.escCloseFun);
    },
    clickClose: function clickClose() {
      this.close ? this.close(this.hide) : this.hide();
    }
  },
  mounted: function mounted() {
    this.value && this.bindEvent();
  }
};

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "bounce"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    staticClass: "x-modal-box"
  }, [(_vm.mask) ? _c('div', {
    staticClass: "x-mask",
    on: {
      "click": _vm.clickClose
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x-modal",
    class: [{
        'x-radius': _vm.radius
      },
      'x-modal-' + _vm.size
    ]
  }, [_vm._t("title", [_c('div', {
    staticClass: "x-modal-title"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), (_vm.showClose) ? _c('span', {
    staticClass: "x-modal-close",
    on: {
      "click": _vm.clickClose
    }
  }, [_c('i', {
    staticClass: "x-icon-close-round"
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "x-modal-content"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.$slots.footer) ? _c('div', {
    staticClass: "x-modal-footer x-text-r"
  }, [_vm._t("footer")], 2) : _vm._e()], 2)])])
},staticRenderFns: []}

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

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map