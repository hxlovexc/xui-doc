(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-page", [], factory);
	else if(typeof exports === 'object')
		exports["x-page"] = factory();
	else
		root["x-page"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 185);
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

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xPage = __webpack_require__(186);

var _xPage2 = _interopRequireDefault(_xPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _xPage2.default;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(187),
  /* template */
  __webpack_require__(188),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    border: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'default'
    },
    radius: {
      type: Boolean,
      default: true
    },
    clearance: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: function _default() {
        return 1;
      }
    },
    input: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: function _default() {
        return 10;
      }
    }
  },
  data: function data() {
    return {
      curPage: 1,

      disabledClass: 'x-page-disabled',
      listNumber: 7
    };
  },

  methods: {
    setPage: function setPage(page) {
      this.curPage = page;
    },
    prev: function prev() {
      var page = this.curPage - 1;
      if (page === 0) return;
      this.curPage = page;
    },
    next: function next() {
      var page = this.curPage + 1;
      if (page > this.length) return;
      this.curPage = page;
    },
    selectstart: function selectstart(event) {
      event.preventDefault();
    },
    selectPage: function selectPage(_ref) {
      var target = _ref.target;

      if (target.tagName === 'LI') {
        var index = Number(target.getAttribute('index'));
        this.setPage(index);
      }
    },
    enter: function enter(_ref2) {
      var target = _ref2.target;

      var value = target.value;

      if (value === this.curPage) return;
      if (value > this.length) {
        value = this.length;
        target.value = value;
      } else if (!value) {
        value = 1;
        target.value = value;
      }
      this.setPage(Number(value));
    },
    inputChange: function inputChange(_ref3) {
      var target = _ref3.target;

      var value = target.value;
      value = this.isNaN(parseInt(value, 10));
      target.value = value;
    },
    isNaN: function (_isNaN) {
      function isNaN(_x) {
        return _isNaN.apply(this, arguments);
      }

      isNaN.toString = function () {
        return _isNaN.toString();
      };

      return isNaN;
    }(function (value) {
      if (isNaN(value)) {
        value = 1;
      }
      return value;
    })
  },
  watch: {
    value: function value(_value) {
      this.curPage = this.isNaN(parseInt(_value, 10));
    },
    curPage: function curPage(value) {
      this.$emit('change', value);
      this.$emit('input', value);
    }
  },
  computed: {
    firstOneClass: function firstOneClass() {
      return this.curPage === 1 ? this.disabledClass : '';
    },
    lastClass: function lastClass() {
      return this.curPage === this.length ? this.disabledClass : '';
    },
    length: function length() {
      return Math.ceil(this.total / this.pageSize);
    },
    list: function list() {
      var length = this.length;
      if (length > this.listNumber) {
        var list = [],
            start = void 0,
            end = void 0;
        start = this.curPage - 3;

        if (start < 1) {
          start = 1;
        } else {
          var i = length - this.listNumber;
          start = start > i ? i + 1 : start;
        }
        end = start + (this.listNumber - 1);

        for (start; start <= end; start++) {
          list.push(start);
        }
        return list;
      }
      return length;
    },
    floorList: function floorList() {
      return Math.ceil(this.listNumber / 2);
    }
  }
};

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-page",
    class: [
      'x-page-' + _vm.size,
      {
        'x-page-border': _vm.border,
        'x-page-radius': _vm.radius,
        'x-page-clearance': _vm.clearance
      }
    ]
  }, [_c('div', {
    staticClass: "x-page-list-box",
    on: {
      "selectstart": _vm.selectstart
    }
  }, [_c('ul', [_c('li', {
    class: [_vm.firstOneClass],
    on: {
      "click": _vm.prev
    }
  }, [_c('i', {
    staticClass: "x-icon-arrow-left"
  })]), _vm._v(" "), (_vm.length > _vm.listNumber && _vm.curPage > _vm.floorList) ? _c('li', {
    class: [_vm.firstOneClass],
    on: {
      "click": function($event) {
        _vm.setPage(1)
      }
    }
  }, [_vm._v("首页")]) : _vm._e()]), _vm._v(" "), _c('ul', {
    on: {
      "click": _vm.selectPage
    }
  }, _vm._l((_vm.list), function(item) {
    return _c('li', {
      key: item,
      class: {
        'x-page-active': item === _vm.curPage
      },
      attrs: {
        "index": item
      }
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('ul', [(_vm.length > _vm.listNumber && _vm.curPage <= _vm.length - _vm.floorList) ? _c('li', {
    class: _vm.lastClass,
    on: {
      "click": function($event) {
        _vm.setPage(_vm.length)
      }
    }
  }, [_vm._v("末页")]) : _vm._e(), _vm._v(" "), _c('li', {
    class: _vm.lastClass,
    on: {
      "click": _vm.next
    }
  }, [_c('i', {
    staticClass: "x-icon-arrow-right"
  })])])]), _vm._v(" "), (_vm.input) ? _c('div', {
    staticClass: "x-page-input"
  }, [_c('span', [_vm._v("到第")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.curPage),
      expression: "curPage"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.curPage)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.curPage = $event.target.value
      }, _vm.inputChange],
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        _vm.enter($event)
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("页")])]) : _vm._e()])
},staticRenderFns: []}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map