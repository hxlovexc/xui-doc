(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("x-checkbox", [], factory);
	else if(typeof exports === 'object')
		exports["x-checkbox"] = factory();
	else
		root["x-checkbox"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
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

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xCheckbox = __webpack_require__(105);

var _xCheckbox2 = _interopRequireDefault(_xCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _xCheckbox2.default;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(106),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xCheckbox = __webpack_require__(60);

var _xCheckbox2 = _interopRequireDefault(_xCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'x-checkbox',
  mixins: [_xCheckbox2.default]
};

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "x-checkbox x-unselect",
    class: [{
        'x-checked': _vm.state,
        'x-disabled': _vm.disabled
      },
      ("x-checkbox-" + _vm.type)
    ]
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.label,
      "checked": _vm.state
    },
    on: {
      "change": _vm.change
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "x-icon-done"
  }), _vm._v(" "), (_vm.$slots.default) ? _c('span', [_vm._t("default")], 2) : _vm._e()])
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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryComponents = __webpack_require__(15);

exports.default = {
  props: {
    value: {},
    type: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number]
    },
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  data: function data() {
    return {
      model: '',
      state: this.value,
      PARENT: _queryComponents.parent.call(this, 'x-checkbox-group')
    };
  },

  methods: {
    change: function change(_ref) {
      var _this = this;

      var target = _ref.target;

      this.changeVal(target.checked);
      this.$nextTick(function () {
        _this.$emit('change', _this.state);
        _this.$emit('input', _this.state);
      });
    },
    changeVal: function changeVal(checked) {
      if (this.PARENT) {
        this.PARENT.change(this.label);
      } else {
        this.updateState(checked);
      }
    },
    updateState: function updateState(val) {
      this.state = val ? this.label || true : false;
    }
  },
  watch: {
    value: function value(_value) {
      if (_value === this.state) return;
      this.changeVal(this.label ? _value === this.label : _value);
    }
  },
  created: function created() {
    this.checked && this.changeVal(true);
  }
};

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map