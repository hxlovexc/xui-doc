(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-scroll-bar", [], factory);
	else if(typeof exports === 'object')
		exports["x-scroll-bar"] = factory();
	else
		root["x-scroll-bar"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 212);
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

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xScrollBar = __webpack_require__(213);

var _xScrollBar2 = _interopRequireDefault(_xScrollBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _xScrollBar2.default;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(214),
  /* template */
  __webpack_require__(215),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      barHeight: 0,
      barTop: 0,
      startY: 0,
      endY: 0,
      isHover: false,

      boxHeight: 0,

      contentHeight: 0
    };
  },

  methods: {
    calculate: function calculate() {
      this.boxHeight = this.$el.offsetHeight;
      this.contentHeight = this.$refs['content-box'].offsetHeight;
      this.barHeight = this.boxHeight / (this.contentHeight / this.boxHeight);
    },
    scroll: function scroll(event) {
      if (this.isHover) return;
      this.endY = this.barTop = event.target.scrollTop / (this.contentHeight / this.boxHeight);
      this.$emit('scroll', this.barTop);
    },
    barMousedown: function barMousedown(event) {
      event.stopImmediatePropagation();
      this.isHover = true;
      this.startY = event.clientY - event.target.offsetTop;

      document.onselectstart = function () {
        return false;
      };
      document.onmouseup = this.mouseup;
      document.onmousemove = this.docmousemove;
    },
    barBoxMousedown: function barBoxMousedown(event) {
      this.barTop = event.clientY - event.target.getBoundingClientRect().top - this.barHeight / 2;
      this.setTop();
    },
    docmousemove: function docmousemove(event) {
      this.barTop = this.endY + (event.clientY - this.startY);
      this.setTop();
    },
    setTop: function setTop() {
      var maxTop = this.boxHeight - this.barHeight;

      if (this.barTop >= maxTop) {
        this.barTop = maxTop;
      } else if (this.barTop <= 0) {
        this.barTop = 0;
      }
      this.$refs['scroll-content'].scrollTop = this.barTop * (this.contentHeight / this.boxHeight);
      this.$emit('scroll', this.barTop);
    },
    mouseup: function mouseup() {
      this.endY = this.barTop;
      this.startY = this.isHover = document.onmouseup = document.onselectstart = document.onmousemove = null;
    }
  },
  mounted: function mounted() {
    this.$nextTick(this.calculate);
  }
};

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-scroll-bar"
  }, [_c('div', {
    ref: "scroll-content",
    staticClass: "x-scroll-bar-content",
    on: {
      "scroll": _vm.scroll
    }
  }, [_c('div', {
    ref: "content-box",
    staticClass: "content"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c('div', {
    staticClass: "x-bar-box",
    on: {
      "mousedown": _vm.barBoxMousedown
    }
  }, [_c('div', {
    staticClass: "x-bar",
    class: {
      'x-bar-hover': _vm.isHover
    },
    style: ({
      height: (_vm.barHeight + "px"),
      transform: ("translateY(" + _vm.barTop + "px)")
    }),
    on: {
      "mousedown": _vm.barMousedown
    }
  })])])
},staticRenderFns: []}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map