(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-submenu", [], factory);
	else if(typeof exports === 'object')
		exports["x-submenu"] = factory();
	else
		root["x-submenu"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 238);
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.parent = parent;
function find(name, callback) {
  var childrens = this.$children;
  var components = [];
  if (childrens.length) {
    childrens.forEach(function (item) {
      var childName = item.$options.name;
      var childs = item.$children;

      if (name === childName) {
        components.push(item);
        callback && callback(item);
      }

      childs.length && find(item, name, callback);
    });
  }
  return components;
}

function parent(name, callback) {
  var parent = this.$parent;
  var parentName = parent.$options.name;

  while (parent && parentName !== name) {
    parent = parent.$parent;
    if (parent) {
      parentName = parent.$options.name;
    }
  }
  return parent;
}

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xSubmenu = __webpack_require__(239);

var _xSubmenu2 = _interopRequireDefault(_xSubmenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _xSubmenu2.default;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(240),
  /* template */
  __webpack_require__(241),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryComponents = __webpack_require__(15);

exports.default = {
  name: 'x-submenu',
  props: {
    name: {
      type: [String, Number],
      default: ''
    },
    active: {
      type: [String, Number],
      default: ''
    }
  },
  data: function data() {
    return {
      show: false,
      parent: _queryComponents.parent.call(this, 'x-menu'),
      curActive: this.active
    };
  },

  computed: {
    isActive: function isActive() {
      return this.$parent.curActive && this.$parent.curActive === this.name;
    },
    isLevel: function isLevel() {
      return this.parent.mode === 'level';
    }
  },
  methods: {
    mouseShow: function mouseShow() {
      if (!this.isLevel) return;
      this.showMenu();
    },
    selected: function selected(key) {
      this.curActive = key;
    },
    mouseHide: function mouseHide() {
      if (!this.isLevel) return;
      this.hideMenu();
    },
    clickShow: function clickShow() {
      if (this.isLevel) return;

      this.show ? this.hideMenu() : this.showMenu();
    },
    showMenu: function showMenu() {
      this.show = true;
    },
    hideMenu: function hideMenu() {
      this.show = false;
    }
  }
};

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "x-submenu",
    class: {
      'x-show-submenu': _vm.show,
      'x-menu-active': _vm.isActive
    },
    on: {
      "mouseenter": _vm.mouseShow,
      "mouseleave": _vm.mouseHide
    }
  }, [_c('div', {
    staticClass: "x-meun-item x-menu-item-title",
    on: {
      "click": _vm.clickShow
    }
  }, [_c('span', {
    staticClass: "x-submenu-title"
  }, [_vm._t("title")], 2), _vm._v(" "), _vm._m(0)]), _vm._v(" "), (_vm.isLevel) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "x-submenu-box"
  }, [_c('ul', [_vm._t("default")], 2)])]) : _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "x-submenu-box"
  }, [_c('ul', [_vm._t("default")], 2)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "x-subment-icon"
  }, [_c('i', {
    staticClass: "x-icon-chevron-down"
  })])
}]}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map