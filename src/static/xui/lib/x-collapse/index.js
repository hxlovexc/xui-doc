(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-collapse", [], factory);
	else if(typeof exports === 'object')
		exports["x-collapse"] = factory();
	else
		root["x-collapse"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 108);
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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xCollapse = __webpack_require__(109);

var _xCollapse2 = _interopRequireDefault(_xCollapse);

var _xCollapseItem = __webpack_require__(112);

var _xCollapseItem2 = _interopRequireDefault(_xCollapseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  xCollapse: _xCollapse2.default,
  xCollapseItem: _xCollapseItem2.default
};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(111),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Array],
      default: ''
    },
    radius: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      activeItem: this.value ? [].concat(this.value) : []
    };
  },

  methods: {
    change: function change(activeItem) {
      this.activeItem = activeItem;
      var value = this.accordion ? activeItem[0] : activeItem;
      this.$emit('input', value);
      this.$emit('change', value, this.$el);
    },
    itemClick: function itemClick(name) {
      if (this.accordion) {
        this.change(this.activeItem[0] && this.activeItem[0] === name ? '' : [name]);
      } else {
        var activeItem = this.activeItem.splice(0);
        var index = activeItem.indexOf(name);
        if (index > -1) {
          activeItem.splice(index, 1);
        } else {
          activeItem.push(name);
        }
        this.change(activeItem);
      }
    }
  },
  watch: {
    value: function value(_value) {
      if (Array.isArray(_value) && this.accordion) {
        this.activeItem = _value[0];
        return;
      }
      this.activeItem = [].concat(_value);
    }
  }
};

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-collapse",
    class: {
      'x-radius': _vm.radius
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(114),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    title: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: [String, Number],
      default: function _default() {
        return this._uid;
      }
    }
  },
  methods: {
    itemClick: function itemClick() {
      this.$parent.itemClick(this.name || this.index);
    }
  },
  computed: {
    active: function active() {
      return this.$parent.activeItem.indexOf(this.name) > -1;
    }
  }
};

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-collapse-item",
    class: {
      'x-collapse-active': _vm.active
    }
  }, [_c('div', {
    staticClass: "x-collapse-header",
    on: {
      "click": _vm.itemClick
    }
  }, [_c('i', {
    staticClass: "x-icon-arrow-forward"
  }), _vm._v(" "), _c('div', {
    staticClass: "x-collapse-title"
  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    staticClass: "x-collapse-content"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map