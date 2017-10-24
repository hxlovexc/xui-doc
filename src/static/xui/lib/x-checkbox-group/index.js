(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-checkbox-group", [], factory);
	else if(typeof exports === 'object')
		exports["x-checkbox-group"] = factory();
	else
		root["x-checkbox-group"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
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

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xCheckboxGroup = __webpack_require__(101);

var _xCheckboxGroup2 = _interopRequireDefault(_xCheckboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _xCheckboxGroup2.default;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xCheckboxGroup_xRadioGroup = __webpack_require__(61);

var _xCheckboxGroup_xRadioGroup2 = _interopRequireDefault(_xCheckboxGroup_xRadioGroup);

var _queryComponents = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'x-checkbox-group',
  mixins: [_xCheckboxGroup_xRadioGroup2.default],
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      model: []
    };
  },

  methods: {
    change: function change(value) {
      var index = this.model.indexOf(value);
      if (index === -1) {
        this.model.push(value);
      } else {
        this.model.splice(index, 1);
      }
      this.$emit('input', this.model);
      this.$emit('change', this.model);
    },
    updateState: function updateState(value) {
      this.model = value;

      _queryComponents.find.call(this, 'x-checkbox', function (item) {
        item.state = value.indexOf(item.label) > -1;
      });
    }
  },
  watch: {
    value: function value(_value) {
      this.updateState(_value);
    }
  },
  mounted: function mounted() {
    this.updateState(this.value);
  }
};

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "x-checkbox-group",
    class: [
      _vm.size && ("x-checkbox-button-" + _vm.size),
      _vm.type && ("x-checkbox-button-" + _vm.type),
      {
        'x-checkbox-button-radius': _vm.radius
      }
    ]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  props: {
    radius: {
      type: Boolean,
      default: false
    },
    button: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'primary'
    }
  }
};

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map